// import { formatCountdown } from "antd/lib/statistic/utils";
import { Button, Row, Icon } from 'antd'

import styled from 'styled-components'

export const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 85px;
  padding-bottom: 75px;
  background: #ffffff;
`

export const ScreenTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin: 20px auto;
`

export const ServicesSection = styled.div`
  text-align: justify;
  min-height: 100vh;
  .ant-col {
    padding: 0 auto;
    height: auto;
    line-height: 2;
  }
  .ant-typography {
    font-size: 24px;
  }
  @media (min-height: 768px) {
    margin-top: 10%;
  }
`

export const ServiceCard = styled.div`
  width: 100%;
  margin: 50px auto;
  text-align: center;
  padding: 100px auto;
  p {
    text-align: justify;
  }
`

export const ServiceIcon = styled(Button)`
  padding: 30px;
  font-size: 80px;
  margin: 0 auto 50px auto;
  color: #198ffb !important;
  border: 1px solid;
  border-radius: 50%;
  background: rgb(230, 247, 255);
  width: 50% !important;
  min-height: 20vh;
`

export const TechTitleIcon = styled(Icon)`
  ${'' /* padding: 10px; */}
  font-size: 40px;
  color: grey !important;
  ${'' /* background: yellow; */}
  margin: auto;
  ${'' /* border: 3px solid; */}
  ${'' /* border-radius: 50%; */}
  ${'' /* box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.75); */}
`

export const TechImageContainer = styled.div`
  border-radius: 50%;
  padding: 15%;
  ${'' /* border: 1px solid #198ffb; */}
  display: inline-block;
  margin: 0 auto;
  overflow: hidden;
`

export const TechStacksRow = styled(Row)`
  margin: 40px auto;
  text-align: center;
  p {
    text-align: center;
  }
`
