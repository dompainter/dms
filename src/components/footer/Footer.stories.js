import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Footer from '.'

const stories = storiesOf('Footer', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
      <Footer>
          {text('Content', 'Hello World')}
      </Footer>
  ))
