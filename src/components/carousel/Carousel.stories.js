import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Carousel from '.'

const stories = storiesOf('Carousel', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Carousel>
      {text('Content', 'Hello World')}
    </Carousel>
  ))
