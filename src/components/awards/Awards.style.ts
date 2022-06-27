import styled from 'styled-components'

export const AwardsWrapper = styled.div`
  margin: 50px 0px 140px 623px;

  &.fade-enter {
    opacity: 0;
    transform: translateY(5%);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 200ms;
  }
`
