import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Colours from '.'

const stories = storiesOf('Colours', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Colours>
      {text('Content', 'Hello World')}
    </Colours>
  ))
