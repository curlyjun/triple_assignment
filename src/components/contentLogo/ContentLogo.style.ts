import styled from 'styled-components'

export const ContentLogoWrapper = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  text-align: center;
  background-image: url('images/triple2x.png');
  color: rgba(58, 58, 58, 0.7);

  &.fade-enter {
    opacity: 0;
    transform: translateY(5%);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 700ms ease-in-out;
  }
`
