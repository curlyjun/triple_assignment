import AwardItem from './AwardItem'
import * as Styled from './Awards.style'

import { useFadeIn } from '@hooks/useFadeIn'

const Awards = () => {
  const fadeInClassName = useFadeIn(200)

  return (
    <Styled.AwardsWrapper className={fadeInClassName}>
      <AwardItem backgroundImgUrl="images/play-store2x.png">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem backgroundImgUrl="images/badge-apple4x.png">
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardItem>
    </Styled.AwardsWrapper>
  )
}

export default Awards
