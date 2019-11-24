import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Input from '.'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => {
    return (
      <CenteredWrapper>
        <Input
          placeholder={text('Placeholder', 'Hello World')}
          onChange={action('onChange')}
          defaultValue={text('Default Value', '')}
          errorMessage={text('Error Message', '')}
          type={select('Type', ['text', 'email', 'password'], 'text')}
        />
      </CenteredWrapper>

    )
  })
