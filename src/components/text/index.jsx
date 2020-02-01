import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'

const TextContainer = styled.span`
  font: ${getFont()};
`

const Text = ({ children, ...htmlAttributes }) => {
  return (
    <TextContainer {...htmlAttributes}>
      {children}
    </TextContainer>
  )
}

Text.propTypes = {
  children: propTypes.node
}

export default Text
