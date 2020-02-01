import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Text from '.'

const stories = storiesOf('Text', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Text>
      {text('Content', 'Hello World')}
    </Text>
  ))
