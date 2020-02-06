import React from 'react'
import PropTypes from 'prop-types'
import Mobile from './Mobile'
import MobileTrees from './MobileTrees'

const Graphics = ({ name }) => {
  switch (name) {
  case 'mobile':
    return <Mobile ariaLabel='mobile' />
  case 'mobile-trees':
    return <MobileTrees />
  default:
    return 'No SVG found'
  }
}

Graphics.propTypes = {
  name: PropTypes.string
}

export default Graphics
