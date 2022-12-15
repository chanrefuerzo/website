import styled from 'styled-components'

import { Icon, Row } from 'antd'

export const PhaseIcon = styled(Icon)`
  font-size: 40px;
`

export const ScreenTitle = styled.h1`
  text-align: center;
  margin: 20px auto;
`

export const PhaseRowContainer = styled(Row)`
  margin-bottom: 30px;
`

export const Section = styled.div`
  min-height: 100vh;
  padding-top: 85px;
  padding-bottom: 75px;
  background: #ffffff;
  display: flex;
  .phase-icon-wrapper {
    border-radius: 100px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: CENTER;
    width: 100px;
    height: 100px;
    border: 1px solid #636e72;
  }
`

export const Phases = styled.div`
  margin-top: 50px;
  text-align: left;
  .ant-col {
    height: 150px;
  }
  .ant-typography {
    font-size: 24px;
  }
`
