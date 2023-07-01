import React from 'react'
import './css/heading.scss'

const Heading = ({ text }) => {
  return (
    <h1 className='GradShadowHeading'>
        {text}
    </h1>
  )
}

export default Heading