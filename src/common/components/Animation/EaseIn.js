import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

const EaseInAnimation = posed.div({
  open: {
    x: '0%',
    y: '0%',
    opacity: 1,
    transition: ({ delay }) => ({
      type: 'spring', stiffnes: 300, damping: 14, delay,
    }),
  },
  closed: {
    opacity: 0,
    x: ({ start }) => {
      if (['left', 'right'].indexOf(start) !== -1) {
        if (start === 'right') {
          return '+200px'
        } else {
          return '-200px'
        }
      }
      return '0px'
    },
    y: ({ start }) => {
      if (['top', 'bottom'].indexOf(start) !== -1) {
        if (start === 'bottom') {
          return '+200%'
        } else {
          return '-200%'
        }
      }
      return '0px'
    },
  },
})

function EaseIn({ children, duration = 0, delay = 0, pose = false, start, offset = 100 }) {
  const [poseState, setPose] = useState('closed')
  const ref = useRef()

  useEffect(() => {
    if (!pose) {
      window.addEventListener('scroll', () => {
        console.log(ref.current.getBoundingClientRect().top, window.innerHeight)
        if (
          ref.current.getBoundingClientRect().top < window.innerHeight - offset &&
          poseState === 'closed'
        ) {
          setPose('open')
        } else if (ref.current.getBoundingClientRect().top > window.innerHeight + 20) {
          setPose('closed')
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <EaseInAnimation
      ref={ref}
      duration={duration}
      delay={delay}
      start={start}
      pose={pose || poseState}
    >
      {children}
    </EaseInAnimation>
  )
}

EaseIn.propTypes = {
  children: PropTypes.element,
}

export default EaseIn
