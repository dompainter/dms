import React, { useState } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import useInterval from '../../hooks/use-interval'
import { black, porcelain, green } from '../../utils/pallette'
import Text from '../text'

const SlidesContainer = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCentered }) => isCentered ? 'center' : 'left'};
`

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

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

const TextSlider = ({ slides, isCentered }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [delay, setDelay] = useState(6000)

  const handleSetClick = index => {
    setDelay(null) // Setting delay to null clears interval in useInterval hook
    setActiveSlideIndex(index)
    setDelay(6000) // Set up interval again once new slide has been set
  }

  useInterval(() => {
    setActiveSlideIndex((activeSlideIndex + 1) % slides.length)
  }, delay)

  return (
    <SlidesContainer isCentered={isCentered}>
      <Slide>
        <Text>{slides[activeSlideIndex].text}</Text>
      </Slide>
      <DotContainer>
        {slides.map((_, index) =>
          <Dot
            key={index}
            isActive={index === activeSlideIndex}
            onClick={() => handleSetClick(index)}
          />
        )}
      </DotContainer>
    </SlidesContainer>
  )
}

TextSlider.propTypes = {
  isCentered: propTypes.bool,
  slides: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string
    })
  )
}

export default TextSlider
