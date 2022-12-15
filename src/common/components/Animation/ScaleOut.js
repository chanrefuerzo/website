import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

const ScaleOuitAnimation = posed.div({
  open: {
    scale: 1,
    display: 'flex',
  },
  closed: {
    scale: 0,
    display: 'flex',
  },
})

function ScaleOut({ children, pose = false, offset = 100 }) {
  const [poseState, setPose] = useState('closed')
  const ref = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        ref.current.getBoundingClientRect().top < window.innerHeight - offset &&
        poseState === 'closed'
      ) {
        setPose('open')
      } else {
        setPose('closed')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ScaleOuitAnimation ref={ref} pose={pose || poseState}>
      {children}
    </ScaleOuitAnimation>
  )
}

ScaleOut.propTypes = {
  children: PropTypes.element,
}

export default ScaleOut
