import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Card from '.'

const stories = storiesOf('Card', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Card
        heading={text('Heading', 'Heading')}
        subHeading={text('SubHeading', 'SubHeading')}
        sell={text('Sell', 'Hello World')}
        imageUrl="https://picsum.photos/720/720"
        onClick={action('onClick')}
      />
    </CenteredWrapper>
  ))
