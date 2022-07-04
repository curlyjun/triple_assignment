import MetricItem from './MetricItem'
import * as Styled from './Metrics.style'

const Metrics = () => {
  return (
    <Styled.MetricsWrapper fadeInDelay={100}>
      <MetricItem count={700} strongString="만 명" remainedString="의 여행자" />

      <MetricItem
        count={100}
        strongString="만 개"
        remainedString="의 여행 리뷰"
      />

      <MetricItem
        count={470}
        strongString="만 개"
        remainedString="의 여행 일정"
      />
    </Styled.MetricsWrapper>
  )
}

export default Metrics
