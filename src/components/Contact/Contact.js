import React from 'react'
import { Container } from 'common/assets/style'
import Form from './components/Form'
import { Section } from 'components/Process/assets/style'
import { Typography } from 'antd'

const { Title } = Typography
export default function Contact({ refs }) {
  return (
    <Section ref={refs['contact']} id="contact">
      <Container>
        <Title level={4}>Contact Us</Title>
        <Form />
      </Container>
    </Section>
  )
}
