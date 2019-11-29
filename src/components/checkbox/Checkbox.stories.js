import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Checkbox from '.'

const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Checkbox
        onChange={action('onChange')}
        checked={boolean('Checked', false)}
      />
    </CenteredWrapper>
  ))
