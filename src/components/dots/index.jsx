import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

import { black, porcelain, green } from '../../utils/pallette'

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Dot = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background-color: ${({ isActive }) => isActive ? black : green};
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  &:hover:before {
    background-color: ${porcelain};
  }
`

const Dots = ({ numberOfDots, onDotClick, activeDotIndex, ...htmlAttributes }) => (
  <DotContainer {...htmlAttributes} >
    {[...new Array(numberOfDots)].map((_, index) =>
      <Dot
        key={index}
        isActive={index === activeDotIndex}
        onClick={() => onDotClick(index)}
      />
    )}
  </DotContainer>
)

Dots.propTypes = {
  numberOfDots: propTypes.number,
  onDotClick: propTypes.func,
  activeDotIndex: propTypes.number
}

export default Dots
