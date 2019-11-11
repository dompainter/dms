import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Hero from '.'

const stories = storiesOf('Hero', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Hero>
      {text('Content', 'Hello World')}
    </Hero>
  ))
