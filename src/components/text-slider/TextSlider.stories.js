import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import TextSlider from '.'

const stories = storiesOf('TextSlider', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <TextSlider
        slides={[
          { text: 'Hello World' },
          { text: 'Slide Content' },
          { text: 'Another Slide' }
        ]}
      />
    </CenteredWrapper>
  ))
