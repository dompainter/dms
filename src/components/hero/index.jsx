import React from 'react'
import propTypes from 'prop-types'

const Hero = ({ name }) => {
  return (
    <div>
      Hero
    </div>
  )
}

Hero.propTypes = {
  name: propTypes.string
}

export default Hero
