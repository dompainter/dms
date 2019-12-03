import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'
import { white } from '../../utils/pallette'

const BackgroundImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${white};
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 15%;
  left: 5%;
`

const Heading = styled.span`
  font: ${getFont({ size: 32, weight: 600, lineHeight: '1.4em' })};
`

const SubHeading = styled.span`
  font: ${getFont({ size: 20 })};
`

const Hero = ({ imageUrl, heading, subHeading }) => {
  return (
    <BackgroundImage imageUrl={imageUrl}>
      <TextContainer>
        <Heading>
          {heading}
        </Heading>
        <SubHeading>
          {subHeading}
        </SubHeading>
      </TextContainer>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  imageUrl: propTypes.string,
  heading: propTypes.string,
  subHeading: propTypes.string
}

export default Hero
