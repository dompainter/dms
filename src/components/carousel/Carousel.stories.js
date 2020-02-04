import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Carousel from '.'
import carouselOne from '../../storybook/images/carousel-1.jpeg'
import carouselTwo from '../../storybook/images/carousel-2.jpeg'
import carouselThree from '../../storybook/images/carousel-3.jpeg'
import carouselFour from '../../storybook/images/carousel-4.jpeg'
import carouselFive from '../../storybook/images/carousel-5.jpeg'
import carouselSix from '../../storybook/images/carousel-6.jpeg'

const stories = storiesOf('Carousel', module)
stories.addDecorator(withKnobs)

const getImage = (index) => {
  const imageMap = {
    0: carouselOne,
    1: carouselTwo,
    2: carouselThree,
    3: carouselFour,
    4: carouselFive,
    5: carouselSix
  }

  return imageMap[index]
}

const slides = [...new Array(6)].map((_, index) => ({ imageUrl: getImage(index) }))

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Carousel
        slides={slides}
      />
    </CenteredWrapper>
  ))
