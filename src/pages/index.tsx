import type { NextPage } from 'next'

import { Awards } from '@components/awards'
import { ContentLogo } from '@components/contentLogo'
import { Metrics } from '@components/metrics'
import { MainWrapper } from '@styles/Main.style'

const Main: NextPage = () => {
  return (
    <MainWrapper>
      <ContentLogo />
      <Metrics />
      <Awards />
    </MainWrapper>
  )
}

export default Main
