import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

const EaseInAnimation = posed.div(({ direction }) => ({
  open:
    direction === 'horizontal'
      ? {
          x: '0',
          opacity: 1,
          transition: ({ duration, delay }) => ({
            duration: duration,
            delay: delay,
          }),
        }
      : {
          y: '0%',
          opacity: 1,
          transition: ({ duration, delay }) => ({
            duration: duration,
            delay: delay,
          }),
        },
  closed:
    direction === 'horizontal'
      ? { opacity: 0, x: '+100px' }
      : { opacity: 0, y: '+300px' },
}))

function EaseIn({ children, duration, delay, direction }) {
  const [pose, setPose] = useState(false)
  const ref = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        ref.current.getBoundingClientRect().top < window.innerHeight - 100 &&
        !pose
      ) {
        setPose(true)
      } else {
        setPose(false)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EaseInAnimation
      ref={ref}
      pose={pose ? 'open' : 'closed'}
      duration={duration}
      delay={delay}
      direction={direction}
    >
      {children}
    </EaseInAnimation>
  )
}

EaseIn.propTypes = {
  children: PropTypes.element,
  duration: PropTypes.number,
  direction: PropTypes.string,
}

export default EaseIn
