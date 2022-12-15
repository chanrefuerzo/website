import React from 'react'
import PropTypes from 'prop-types'
import { LayoutStyles } from '../assets/styles'

export default function Logo({ isTop }) {
  return (
    <div
      style={isTop ? LayoutStyles.logoContainer : LayoutStyles.logoContainer2}
    >
      <p>
        <span style={LayoutStyles.logoBigText}>City Planning</span>
        <br></br>
        <span style={LayoutStyles.logoSmallText}>Development Office</span>
      </p>
    </div>
  )
}

Logo.propTypes = {
  isTop: PropTypes.bool,
}
