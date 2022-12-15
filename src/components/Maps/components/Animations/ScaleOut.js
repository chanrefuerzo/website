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
function ScaleOut({ children }) {
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
    <ScaleOuitAnimation ref={ref} pose={pose ? 'open' : 'closed'}>
      {children}
    </ScaleOuitAnimation>
  )
}

ScaleOut.propTypes = {
  children: PropTypes.element,
}

export default ScaleOut
