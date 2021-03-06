import styled from '@emotion/styled'

export const AwrardItemWrapper = styled.div<{
  backgroundImgUrl: string
}>`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;

  display: inline-block;
  background-image: url(${(p) => p.backgroundImgUrl});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`
