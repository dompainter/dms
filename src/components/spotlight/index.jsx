import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import * as pallette from '../../utils/pallette'

const Circle = styled.div`
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl});`};
  top: 7.5%;
  left: 7.5%;
  width: 85%;
  height: 85%;
  position: absolute;
  border-radius: 50%;
`

const Outer = styled.div`
  border-radius: 50%;
  width: ${({ dimensions }) => `${dimensions}px`};
  height: ${({ dimensions }) => `${dimensions}px`};
  position: relative;
  background: ${({ backgroundColour }) => `${backgroundColour}`};
`

const Inner = styled.div`
  background-color: ${pallette.white};
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  position: absolute;
  border-radius: 50%;
`

const Spotlight = ({ imageUrl, large, medium, small, backgroundColour }) => {
  let size

  if (large) size = 250
  if (medium) size = 200
  if (small) size = 150

  const colour = pallette[backgroundColour]

  return (
    <Outer dimensions={size + 20} backgroundColour={colour || 'transparent'}>
      <Inner dimensions={size + 10}>
        <Circle dimensions={size} imageUrl={imageUrl} />
      </Inner>
    </Outer>
  )
}

Spotlight.propTypes = {
  imageUrl: propTypes.string,
  large: propTypes.bool,
  medium: propTypes.bool,
  small: propTypes.bool,
  backgroundColour: propTypes.string
}

export default Spotlight
