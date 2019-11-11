import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Navigation from '.'

const stories = storiesOf('Navigation', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Navigation>
      {text('Content', 'Hello World')}
    </Navigation>
  ))
