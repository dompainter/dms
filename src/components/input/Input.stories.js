import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Input from '.'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Input>
      {text('Content', 'Hello World')}
    </Input>
  ))
