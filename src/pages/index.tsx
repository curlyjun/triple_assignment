import type { NextPage } from 'next'
import styled from '@emotion/styled'

import { Awards } from '@components/awards'
import { ContentLogo } from '@components/contentLogo'
import { Metrics } from '@components/metrics'

export const Wrapper = styled.main`
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  width: 1200px;
  min-width: 1200px;
`

const Main: NextPage = () => {
  return (
    <Wrapper>
      <ContentLogo />
      <Metrics />
      <Awards />
    </Wrapper>
  )
}

export default Main
