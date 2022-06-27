import { useEffect, useState } from 'react'

import * as Styled from './ContentLogo.style'

const ContentLogo = () => {
  const [state, setState] = useState('fade-enter')

  useEffect(() => {
    setState('fade-enter-active')
  }, [])

  return (
    <Styled.ContentLogoWrapper className={state}>
      2021년 12월 기준
    </Styled.ContentLogoWrapper>
  )
}

export default ContentLogo
