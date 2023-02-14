import React from 'react'
import Company from '../../assets/Images/cpdo.png'
import { Parallax } from 'react-scroll-parallax'

export default function CompanyLogo() {
  return (
    <Parallax y={[-100, 5]}>
      <img
        src={Company}
        alt="Company"
        style={{ maxWidth: '400px', maxHeight: '400px' }}
      />
    </Parallax>
  )
}
