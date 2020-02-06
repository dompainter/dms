import React from 'react'
import { storiesOf } from '@storybook/react'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Graphics from '.'

const stories = storiesOf('Graphics', module)

stories
  .add('Mobile Messages', () => (
    <CenteredWrapper>
      <Graphics name="mobile" />
    </CenteredWrapper>
  ))
  .add('Mobile Trees', () => (
    <CenteredWrapper>
      <Graphics name="mobile-trees" />
    </CenteredWrapper>
  ))
