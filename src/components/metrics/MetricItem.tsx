import { memo, useRef } from 'react'

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
  const ref = useRef<HTMLSpanElement>(null)
  useCountUpAnimation(ref, count, 2000)

  return (
    <Styled.MetricItemWrapper>
      <strong>
        <span ref={ref} />
        {strongString}
      </strong>
      {remainedString}
    </Styled.MetricItemWrapper>
  )
}

export default memo(MetricItem)
