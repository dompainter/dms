import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import NavigationItem from '.'

const stories = storiesOf('NavigationItem', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <NavigationItem>
      {text('Content', 'Hello World')}
    </NavigationItem>
  ))
