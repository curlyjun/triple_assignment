import styled from 'styled-components'

export const MetricsWrapper = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  &.fade-enter {
    opacity: 0;
    transform: translateY(5%);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out 100ms;
  }
`
