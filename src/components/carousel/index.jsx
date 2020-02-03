import React, { useState } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { white, midnight } from '../../utils/pallette'

const CarouselContainer = styled.div`
  width: 550px;
  height: 250px;
  position: relative;
  overflow: hidden;
`

const Slide = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const SlideNavigator = styled.div`
  height: 100%;
  width: 50px;
  font-size: 25px;
  color: ${white};
  display: inline-block;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isLeft }) => isLeft ? 'left: 0' : 'right: 0'};

  ${({ isLeft }) => isLeft
    ? `background: linear-gradient(90deg, ${midnight} 0%, transparent 100%);`
    : `background: linear-gradient(270deg, ${midnight} 0%, transparent 100%);`
};

    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      svg {
        transform: scale(1.1)
      }
    }
`

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavigationClick = (isRight) => {
    let nextIndex = isRight ? activeIndex + 1 : activeIndex - 1

    // Loop array
    if (nextIndex < 0) nextIndex = slides.length - 1

    setActiveIndex(nextIndex % slides.length)
  }

  return (
    <CarouselContainer>
      <SlideNavigator isLeft onClick={() => handleNavigationClick()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </SlideNavigator>
      <Slide imageUrl={slides[activeIndex].imageUrl} />
      <SlideNavigator onClick={() => handleNavigationClick(true)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </SlideNavigator>

    </CarouselContainer>
  )
}

Carousel.propTypes = {
  slides: propTypes.arrayOf(
    propTypes.shape({
      imageUrl: propTypes.string
    })
  )
}

export default Carousel
