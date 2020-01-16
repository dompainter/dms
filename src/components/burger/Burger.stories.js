import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Burger from '.'

const stories = storiesOf('Burger', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Burger
        isOpen={boolean('Open', false)}
        onClick={action('onClick')}
      />
    </CenteredWrapper>
  ))
