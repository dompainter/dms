import React from 'react'
import PropTypes from 'prop-types'
import Mobile from './Mobile'

const Graphics = ({ name }) => {
  switch (name) {
  case 'mobile':
    return <Mobile ariaLabel='mobile' />
    break
  default:
    return 'No SVG found'
    break
  }
}

Graphics.propTypes = {
  name: PropTypes.string
}

export default Graphics
