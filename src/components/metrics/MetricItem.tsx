import { memo } from 'react'

import * as Styled from './MetricItem.style'

import { useCountUpAnimation } from '@hooks/useCountUpAnimation'

interface MetricItemProps {
  count: number
  strongString: string
  remainedString: string
}

const MetricItem = ({
  count,
  strongString,
  remainedString,
}: MetricItemProps) => {
  const currentCount = useCountUpAnimation(count, 2000)

  return (
    <Styled.MetricItemWrapper>
      <strong>
        <span>{currentCount}</span>
        {strongString}
      </strong>
      {remainedString}
    </Styled.MetricItemWrapper>
  )
}

export default memo(MetricItem)
