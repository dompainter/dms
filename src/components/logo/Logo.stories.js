import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Logo from '.'

const stories = storiesOf('Logo', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Logo>
      {text('Content', 'Hello World')}
    </Logo>
  ))
