import * as Styled from './ContentLogo.style'

import { useFadeIn } from '@hooks/useFadeIn'

const ContentLogo = () => {
  const fadeInClassName = useFadeIn()
  return (
    <Styled.ContentLogoWrapper className={fadeInClassName}>
      2021년 12월 기준
    </Styled.ContentLogoWrapper>
  )
}

export default ContentLogo
