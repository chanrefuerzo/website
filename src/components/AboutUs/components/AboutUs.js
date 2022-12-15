import React from 'react'
import { Section } from '../assets/style'
import { Container } from 'common/assets/style'
import CardImage from './CardImage'
import EaseIn from '../components/Animation/EaseIn'

function AboutUs({ refs }) {
  return (
    <Section ref={refs['about']} id="about">
      <div>
        <p>About Us</p>
      </div>
      <div>
        <p>
          We're a Software and Web Development company that focuses on finding
          customized solutions to your business needs.
        </p>
      </div>
      <div>
        <p>Meet our Team!</p>
      </div>
      <div>
        <Container>
          <EaseIn>
            <CardImage></CardImage>
          </EaseIn>
        </Container>
      </div>
    </Section>
  )
}
export default AboutUs
