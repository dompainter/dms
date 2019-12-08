import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'
import { white } from '../../utils/pallette'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBox = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`

const TextContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const Heading = styled.span`
  font: ${getFont({ size: 32, weight: 600, lineHeight: '1.4em' })};
`

const SubHeading = styled.span`
  font: ${getFont({ size: 20, lineHeight: '1.2em' })};
`

const Sell = styled.span`
  font: ${getFont()};
  padding-top: 10px;
`

const Card = ({ imageUrl, heading, subHeading, sell }) => {
  return (
    <Container>
      <ImageBox imageUrl={imageUrl}/>
      <TextContainer>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
        <Sell>{sell}</Sell>
      </TextContainer>
    </Container>
  )
}

Card.propTypes = {
  imageUrl: propTypes.string,
  heading: propTypes.string,
  subHeading: propTypes.string,
  sell: propTypes.string
}

export default Card
