import React, { useEffect, useRef, useState } from 'react'
import { PhaseRowContainer } from '../assets/style'
import { PhaseIcon } from '../assets/style'
import { Col, Card } from 'antd'
import { EaseIn, ScaleOut } from 'common/components/Animation'

// import PropTypes from 'prop-types'

function PhaseRow({ data: { icon, title, description } }) {
  const [animationState, setAnimationState] = useState('closed')
  const rowRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        rowRef.current.getBoundingClientRect().top < window.innerHeight - 200 &&
        animationState === 'closed'
      ) {
        setAnimationState('open')
      } else if (rowRef.current.getBoundingClientRect().top > window.innerHeight + 20) {
        setAnimationState('closed')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PhaseRowContainer>
      <div ref={rowRef}>
        <Col span={4} style={{ display: 'flex' }}>
          <ScaleOut pose={animationState}>
            <p className="phase-icon-wrapper">
              <PhaseIcon type={icon} theme="twoTone" />
            </p>
          </ScaleOut>
        </Col>
        <Col span={20}>
          <EaseIn start="bottom" delay={100} pose={animationState}>
            <Card title={title} style={{ width: '100%' }}>
              <p>{description}</p>
            </Card>
          </EaseIn>
        </Col>
      </div>
    </PhaseRowContainer>
  )
}

// PhaseRow.propTypes = {}

export default PhaseRow
