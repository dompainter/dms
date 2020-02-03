import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Carousel from '.'

const stories = storiesOf('Carousel', module)
stories.addDecorator(withKnobs)

const getRandomNumber = () => Math.floor((Math.random() * 1000) + 1)
const getImage = () => `https://picsum.photos/id/${getRandomNumber()}/720/720`

const slides = [...new Array(7)].map(() => ({ imageUrl: getImage() }))

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Carousel
        slides={slides}
      />
    </CenteredWrapper>
  ))
