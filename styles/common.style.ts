import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeInAni = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
  `

export const FadeInWrapper = styled.div<{
  fadeInDelay: number
}>`
  opacity: 0;
  animation: ${fadeInAni} 700ms ease-in-out forwards ${(p) => p.fadeInDelay}ms;
`
