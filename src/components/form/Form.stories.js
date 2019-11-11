import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Form from '.'

const stories = storiesOf('Form', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Form>
      {text('Content', 'Hello World')}
    </Form>
  ))
