import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'

const StyledP = styled.p`
  font: ${props => props.font};
`

const Font = () => {
  const fontDemos = [{
    title: 'Heading',
    fontFamily: 'Asap, sans-serif',
    size: 32,
    weight: 600
  }, {
    title: 'Heading',
    fontFamily: 'Asap, sans-serif',
    size: 32,
    weight: 'normal'
  }]

  return (
    <>
        {fontDemos.map((demo, index) => (
          <StyledP key={index} font={getFont({ ...demo })}>
            {demo.title}
          </StyledP>
        ))}
    </>
  )
}

Font.propTypes = {
  name: propTypes.string
}

export default Font
