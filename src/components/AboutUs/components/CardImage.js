import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import Box from './Animation/Box'
import posed from 'react-pose'
import styled from 'styled-components'
import EaseIn from '../components/Animation/EaseIn'
import Perly from '../assets/Images/perly.jpg'
import Jason from '../assets/Images/jason.jpg'
import iping from '../assets/Images/iping.jpg'
import ChanImage from '../assets/Images/chan.jpg'

const CustomCard = styled(Card)`
  background: #282e34 !important;
  display: inline-block;
  .ant-card-meta-title {
    color: #ffffff;
  }
  .ant-card-meta-description {
    color: #ffffff;
  }
`

function CardImage({ refs }) {
  const { Meta } = Card

  const info = [
    {
      imgalt: 'Perl',
      src: Perly,
      srconHover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_zR6d_liLC7ap7Vf3JRjw1PocK-AhFTwg4Y-eqoYS3KrAvwCT',
      title: 'Pinuno',
      description: 'Pa tubo ka ?',
    },
    {
      imgalt: 'Rey',
      src: Jason,
      srconHover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcXG7CbsbOE9OruFsxM16fkOj9uoPylZ1gtpDVHa20HQDQy08l',
      title: 'Choco na Gatas',
      description: '150 ser ?',
    },
    {
      imgalt: 'Chan',
      src: ChanImage,
      srconHover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpUsCbWDIzhM7EmRyX0t3nlgHbxhJSItT2-9WGqL52AJ4VOU7R',
      title: 'Chan Refeurzo',
      description: 'Simple nga Gwapo',
    },
    {
      imgalt: 'Tan',
      src: iping,
      srconHover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjmcmHZ4L0EeagWqzIdty-pFFoYjl-R88xiBNIrfOxFQGYqcLA',
      title: 'unknown',
      description: 'adik',
    },
  ]

  const Img = posed.img({
    hoverable: true,
    init: { filter: 'grayscale(80%) blur(2px)' },
    hover: { filter: 'grayscale(0%) blur(0px)' },
  })

  return (
    <Row>
      {info.map((item, key) => {
        return (
          <Col span={6} key={key}>
            <EaseIn direction="vertical" duration={1000} delay={50 * key}>
              <Box>
                <CustomCard
                  hoverable
                  cover={
                    <Img
                      alt={item.imgalt}
                      src={item.src}
                      // onMouseOver={e => (e.currentTarget.src = info.srconHover)}
                      // onMouseOut={e => (e.currentTarget.src = info.src)}
                      style={{ height: 400 }}
                    />
                  }
                >
                  <Meta
                    title={item.title}
                    description={item.description}
                    style={{ color: '#FFFFFF !important' }}
                  />
                </CustomCard>
              </Box>
            </EaseIn>
          </Col>
        )
      })}
    </Row>
  )
}

export default CardImage
