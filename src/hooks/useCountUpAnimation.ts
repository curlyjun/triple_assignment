import { useCallback, useEffect, useRef, useState } from 'react'

/**
 *
 * @param progress 진척도 (0 ~ 1)
 * @returns easeOutQuint 처리된 진척도
 * @ref https://easings.net/ko#easeOutQuint,
 */
const easeOutQuint = (progress: number) => {
  return 1 - Math.pow(1 - progress, 5)
}

/**
 * @desc `ease-out`이 적용된 숫자 증가 애니메이션 커스텀 훅
 * @param maxCount 최대 수
 * @param duration 애니메이션 시간
 * @ref https://medium.com/burst/understanding-animation-with-duration-and-easing-using-requestanimationframe-7e3fd1688d6c
 */
export const useCountUpAnimation = (maxCount: number, duration: number) => {
  const [count, setCount] = useState<string>()
  const startTime = useRef<number | null>(null)

  const animate = useCallback(
    (time: number) => {
      if (!startTime.current) {
        startTime.current = time
      }

      const runtime = time - startTime.current
      const easeOutProgress = easeOutQuint(runtime / duration)

      if (runtime <= duration) {
        setCount(Math.round(easeOutProgress * maxCount).toString())
        requestAnimationFrame(animate)
      }
    },
    [duration, maxCount],
  )

  useEffect(() => {
    const handle = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(handle)
    }
  }, [animate])

  return count
}
