import { useEffect, useState } from 'react'

type FadeInClassName = 'fade-enter' | 'fade-enter-active' | 'fade-enter-done'

export const useFadeIn = (delay = 0) => {
  const [className, setClassName] = useState<FadeInClassName>('fade-enter')

  useEffect(() => {
    setClassName('fade-enter-active')

    const timeout = setTimeout(() => {
      setClassName('fade-enter-done')
    }, 700 + delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return className
}
