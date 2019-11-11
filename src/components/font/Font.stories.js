import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Font from '.'

const stories = storiesOf('Font', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Font>
      {text('Content', 'Hello World')}
    </Font>
  ))
