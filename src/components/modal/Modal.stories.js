import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Modal from '.'
import CenteredWrapper from '../../storybook/components/centered-wrapper'

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Modal
        heading={text('Heading', 'Heading')}
        content={text('Content', 'Hello World')}
        primaryActionMessage={text('Primary Action Message', 'Submit')}
        onPrimaryAction={action('onPrimaryAction')}
        cancelMessage={text('Cancel Message', 'Cancel')}
        onCancel={action('onCancel')}
        isVisible={boolean('isVisible', true)}
      />
    </CenteredWrapper>
  ))
