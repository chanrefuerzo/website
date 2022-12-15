import React from 'react'
import { Container } from 'common/assets/style'
import {
  Section,
  ScreenTitle,
  ServiceCard,
  ServicesSection,
  ServiceIcon,
  TechTitleIcon,
  TechImageContainer,
  TechStacksRow,
} from '../assets/styles'
import Icon from '@ant-design/icons'
import { Row, Col, Typography } from 'antd'

// Web Icons
import JavascriptIcon from '../assets/images/techStacksIcons/javascript.png'
import NodeJsIcon from '../assets/images/techStacksIcons/nodejs.png'
import ReactJsIcon from '../assets/images/techStacksIcons/react.png'
import ApolloGraphqlIcon from '../assets/images/techStacksIcons/apollo1.png'
import AdonisJsIcon from '../assets/images/techStacksIcons/adonis.svg'
import Css3Icon from '../assets/images/techStacksIcons/css-3.png'
import Html5Icon from '../assets/images/techStacksIcons/html-5.png'
// Mobile Icons
import FlutterIcon from '../assets/images/techStacksIcons/flutter.png'
import MaterialUiIcon from '../assets/images/techStacksIcons/materialui.png'
import DartIcon from '../assets/images/techStacksIcons/dart.png'
// import posed from "react-pose";

// Animations
import ScaleOut from './Animations/ScaleOut'
import EaseIn from './Animations/EaseIn'

export default function Maps({ refs }) {
  const mapList = [
    {
      title: 'Basic Map',
      description:
        'All information contained herein shall all be subject to verification from the OCPDC.',
      icon: 'desktop',
      link: 'http://map.davaocity.gov.ph/basicmap/',
    },
    {
      title: 'Zoning Map',
      description:
        'All information contained herein shall all be subject to verification from the OCPDC.',
      icon: 'mobile',
      link: 'http://map.davaocity.gov.ph/zoning/',
    },
    {
      title: 'Watershed Map',
      description:
        'All information contained herein shall all be subject to verification from the OCPDC.',
      icon: 'desktop',
      link: 'http://map.davaocity.gov.ph/watershed/',
    },
  ]

  // const techStacksWeb = [
  //   {
  //     src: JavascriptIcon,
  //     alt: 'JavascriptIcon',
  //     title: 'Javascript',
  //     description: 'https://www.javascript.com/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: NodeJsIcon,
  //     alt: 'NodeJsIcon',
  //     title: 'NodeJs',
  //     description: 'https://nodejs.org/en/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: ReactJsIcon,
  //     alt: 'ReactJsIcon',
  //     title: 'ReactJs',
  //     description: 'https://reactjs.org/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: Css3Icon,
  //     alt: 'Css3Icon',
  //     title: 'CSS3',
  //     description: '',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: Html5Icon,
  //     alt: 'Html5Icon',
  //     title: 'HTML5',
  //     description: '',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: ApolloGraphqlIcon,
  //     alt: 'ApolloGraphqlIcon',
  //     title: 'Apollo + GraphQL',
  //     description: 'https://www.apollographql.com/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: AdonisJsIcon,
  //     alt: 'AdonisJsIcon',
  //     title: 'AdonisJs',
  //     description: '',
  //     width: '30px',
  //     height: 'auto',
  //   },
  // ]

  // const techStacksMobile = [
  //   {
  //     src: FlutterIcon,
  //     alt: 'FlutterIcon',
  //     title: 'Flutter',
  //     description: 'https://www.flutter.dev',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: MaterialUiIcon,
  //     alt: 'MaterialUiIcon',
  //     title: 'Material-UI',
  //     description: 'https://material-ui.com/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: ReactJsIcon,
  //     alt: 'ReactJsIcon',
  //     title: 'ReactJS',
  //     description: 'https://reactjs.org/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  //   {
  //     src: DartIcon,
  //     alt: 'DartIcon',
  //     title: 'Dart',
  //     description: 'https://dart.dev/',
  //     width: '30px',
  //     height: 'auto',
  //   },
  // ]

  const { Title } = Typography

  return (
    <>
      <Section ref={refs['maps']} id="maps" style={{ background: 'white' }}>
        <Container>
          <ScreenTitle>Maps</ScreenTitle>
          <ServicesSection>
            <Row gutter={16} type="flex" justify="center" align="middle">
              {mapList.map((service, key) => (
                <Col span={Math.round(24 / mapList.length)} key={key}>
                  <ServiceCard>
                    <ScaleOut>
                      <ServiceIcon
                        shape="circle"
                        onClick={() => window.open(service.link, '_blank')}
                        icon={service.icon}
                      ></ServiceIcon>
                    </ScaleOut>

                    <EaseIn duration={500} delay={100} direction="vertical">
                      <>
                        <Title>{service.title}</Title>
                        <p>{service.description}</p>
                      </>
                    </EaseIn>
                  </ServiceCard>
                </Col>
              ))}
            </Row>
          </ServicesSection>
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <ServicesSection>
            <TechStacksRow>
              <Col>
                <ScaleOut>
                  <TechTitleIcon type="bulb"></TechTitleIcon>
                </ScaleOut>
                <EaseIn direction="horizontal" duration={500} delay={100}>
                  <ScreenTitle>Technologies we use:</ScreenTitle>
                </EaseIn>
              </Col>
            </TechStacksRow>
            <TechStacksRow type="flex" justify="center">
              {techStacksWeb.map((image, key) => (
                <Col key={key} span={Math.ceil(24 /  .length - 1)}>
                  <EaseIn
                    direction="horizontal"
                    duration={500}
                    delay={100 * key}
                  >
                    <TechImageContainer>
                      <img
                        src={image.src}
                        alt={image.alt}
                        width="70px"
                        height="70px"
                      ></img>
                    </TechImageContainer>
                    <p>{image.title}</p>
                  </EaseIn>
                </Col>
              ))}
            </TechStacksRow>
            <TechStacksRow type="flex" justify="center">
              {techStacksMobile.map((image, key) => (
                <Col
                  key={key}
                  span={Math.ceil(24 / techStacksMobile.length - 1)}
                >
                  <EaseIn
                    direction="horizontal"
                    duration={500}
                    delay={100 * key}
                  >
                    <TechImageContainer>
                      <img
                        src={image.src}
                        alt={image.alt}
                        width="70px"
                        height="70px"
                      ></img>
                    </TechImageContainer>
                    <p>{image.title}</p>
                  </EaseIn>
                </Col>
              ))}
            </TechStacksRow>
          </ServicesSection>
        </Container>
      </Section> */}
    </>
  )
}
