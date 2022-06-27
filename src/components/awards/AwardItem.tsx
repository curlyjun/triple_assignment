import { ReactNode } from 'react'

import * as Styled from './AwardItem.style'

interface AwardItemProps {
  backgroundImgUrl: string
  children: ReactNode
}

const AwardItem = ({ backgroundImgUrl, children }: AwardItemProps) => {
  return (
    <Styled.AwrardItemWrapper backgroundImgUrl={backgroundImgUrl}>
      {children}
    </Styled.AwrardItemWrapper>
  )
}

export default AwardItem
