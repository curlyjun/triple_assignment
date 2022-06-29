import { useCallback, useEffect, useRef, useState } from 'react'

import { easeOutQuint } from '@utils/easing'

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
