import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import useInterval from '../../hooks/use-interval'
import { white, midnight } from '../../utils/pallette'
import Dots from '../dots'

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

const CarouselContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;
`

const StyledDots = styled(Dots)`
  margin-top: 10px;
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
  transition: all .2s ease-in-out;
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
    ? `background: linear-gradient(90deg, ${midnight} 0%, transparent 90%);`
    : `background: linear-gradient(270deg, ${midnight} 0%, transparent 90%);`
};

    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover {
      svg {
        transform: scale(1.1)
      }
    }
`

const PlayPause = styled.div`
  font-size: 15px;
  color: ${midnight};
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [delay, setDelay] = useState(3000)
  const [isPaused, setIsPaused] = useState(false)

  useInterval(() => {
    setActiveIndex((activeIndex + 1) % slides.length)
  }, delay)

  useEffect(() => {
    if (isPaused) {
      setDelay(null)
    } else {
      setDelay(3000)
    }
  }, [isPaused])

  const handleNavigationClick = (isRight) => {
    setDelay(null) // Setting delay to null clears interval in useInterval hook

    let nextIndex = isRight ? activeIndex + 1 : activeIndex - 1

    // Loop array
    if (nextIndex < 0) nextIndex = slides.length - 1

    setActiveIndex(nextIndex % slides.length)

    setDelay(3000) // Set up interval again once new slide has been set
  }

  const handleDotClick = index => {
    setDelay(null) // Setting delay to null clears interval in useInterval hook
    setActiveIndex(index)
    setDelay(3000) // Set up interval again once new slide has been set
  }

  return (
    <Container>
      <CarouselContainer>
        <SlideNavigator isLeft onClick={() => handleNavigationClick()}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </SlideNavigator>
        <Slide imageUrl={slides[activeIndex].imageUrl} />
        <SlideNavigator onClick={() => handleNavigationClick(true)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </SlideNavigator>
      </CarouselContainer>
      <Controls>
        <PlayPause onClick={() => setIsPaused(!isPaused)}>
          <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
        </PlayPause>
        <StyledDots numberOfDots={slides.length} activeDotIndex={activeIndex} onDotClick={handleDotClick} />
      </Controls>
    </Container>
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
