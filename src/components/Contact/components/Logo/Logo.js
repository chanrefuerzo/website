import React from 'react'
import FacebookIcon from '../../assets/Images/fbicon.png'
import TwitterIcon from '../../assets/Images/twittericon.png'
import { Row, Col } from 'antd'
import { EaseIn } from 'common/components/Animation'

export default function Logo() {
  return (
    <div>
      <Row>
        <Col>
          <EaseIn duration={500} delay={300} direction="vertical">
            <a href="https://www.facebook.com/davaocpdo">
              <img
                src={FacebookIcon}
                alt="FacebookIcon"
                style={{ width: '80px', height: '80px' }}
              />
            </a>

            <img
              src={TwitterIcon}
              alt="TwitterIcon"
              style={{ width: '65px', height: '65px' }}
            />
          </EaseIn>
        </Col>
      </Row>
    </div>
  )
}
