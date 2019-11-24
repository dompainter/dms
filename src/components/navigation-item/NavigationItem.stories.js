import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import NavigationItem from '.'

const stories = storiesOf('NavigationItem', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <NavigationItem
        href={text('href', '#')}
        isExternal={boolean('isExternal', false)}
        active={boolean('Active', false)}
      >
        {text('Content', 'Hello World')}
      </NavigationItem>
    </CenteredWrapper>
  ))
