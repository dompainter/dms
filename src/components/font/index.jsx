import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'
import CenteredWrapper from '../../storybook/components/centered-wrapper'

const StyledP = styled.p`
  font: ${props => props.font};
`

const Font = () => {
  const fontDemos = [{
    title: 'Asap - Heading',
    fontFamily: 'Asap, sans-serif',
    size: 32,
    weight: 600
  }, {
    title: 'Asap - Subheading',
    fontFamily: 'Asap, sans-serif',
    size: 26,
    weight: 600
  }, {
    title: 'Asap - Paragraph',
    fontFamily: 'Asap, sans-serif',
    size: 16,
    weight: 'normal'
  }, {
    title: 'Montserrat - Heading',
    fontFamily: 'Montserrat, sans-serif',
    size: 32,
    weight: 600
  }, {
    title: 'Montserrat - Subheading',
    fontFamily: 'Montserrat, sans-serif',
    size: 26,
    weight: 600
  }, {
    title: 'Montserrat - Paragraph',
    fontFamily: 'Montserrat, sans-serif',
    size: 16,
    weight: 'normal'
  }]

  return (
    <CenteredWrapper>
      {fontDemos.map((demo, index) => (
        <StyledP key={index} font={getFont({ ...demo })}>
          {demo.title}
        </StyledP>
      ))}
    </CenteredWrapper>
  )
}

Font.propTypes = {
  name: propTypes.string
}

export default Font
