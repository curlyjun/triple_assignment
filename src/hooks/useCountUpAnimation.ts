import { RefObject, useCallback, useEffect, useRef } from 'react'

/**
 * @desc `ease-out`이 적용된 숫자 증가 애니메이션 커스텀 훅
 * @param ref 숫자가 들어갈 ref
 * @param maxCount 최대 수
 * @param duration 애니메이션 시간
 * @ref https://easings.net/ko#easeOutQuint, https://medium.com/burst/understanding-animation-with-duration-and-easing-using-requestanimationframe-7e3fd1688d6c
 */
export const useCountUpAnimation = (
  ref: RefObject<HTMLElement>,
  maxCount: number,
  duration: number,
) => {
  const startTime = useRef<number | null>(null)

  const animate = useCallback(
    (time: number) => {
      if (!startTime.current) {
        startTime.current = time
      }

      const runtime = time - startTime.current
      const easeOutProgress = 1 - Math.pow(1 - runtime / duration, 5)

      if (runtime <= duration) {
        if (ref.current) {
          ref.current.innerText = Math.round(
            easeOutProgress * maxCount,
          ).toString()
        }
        requestAnimationFrame(animate)
      }
    },
    [ref, duration, maxCount],
  )

  useEffect(() => {
    const handle = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(handle)
    }
  }, [animate])
}
