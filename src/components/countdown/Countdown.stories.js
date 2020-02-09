import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Countdown from '.'
import styled from 'styled-components'

const StyledCountdown = styled(Countdown)`
  width: 700px;
  height: 150px;
`

const stories = storiesOf('Countdown ', module)
stories.addDecorator(withKnobs)

const date = new Date()
const startDate = date.setDate(date.getDate() + 10)

stories
  .add('Default 🚧', () => (
    <CenteredWrapper>
      <StyledCountdown startDate={startDate} />
    </CenteredWrapper>
  ))
