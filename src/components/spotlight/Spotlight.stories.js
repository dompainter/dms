import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Spotlight from '.'

const stories = storiesOf('Spotlight', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Spotlight
        imageUrl="https://picsum.photos/720/720"
        large={boolean('Large', true)}
        medium={boolean('Medium', false)}
        small={boolean('Small', false)}
        backgroundColour={select('Border Colour', ['none', 'midnight', 'porcelain', 'green', 'red', 'white', 'blue', 'black'])}
      />
    </CenteredWrapper>
  ))
