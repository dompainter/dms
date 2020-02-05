import React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Graphics from '.'

const stories = storiesOf('Graphics', module)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Graphics />
    </CenteredWrapper>
  ))
