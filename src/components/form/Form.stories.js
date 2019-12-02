import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Form from '.'

const stories = storiesOf('Form', module)
stories.addDecorator(withKnobs)

const StyledForm = styled(Form)`
  width: 600px;
`

stories
  .add('Default', () => (
    <CenteredWrapper>
      <StyledForm
        fields={[
          {
            input: 'text',
            type: 'text',
            placeholder: 'First name',
            onChange: action('onChange - First name')
          },
          {
            input: 'text',
            type: 'text',
            placeholder: 'Last name',
            onChange: action('onChange - Last name')
          },
          {
            input: 'text',
            type: 'tel',
            placeholder: 'Mobile',
            onChange: action('onChange - Telephone')
          },
          {
            input: 'text',
            type: 'email',
            placeholder: 'Email',
            onChange: action('onChange - Email')
          },
          {
            input: 'select',
            options: [{
              label: 'New South Wales',
              value: 'NSW'
            }, {
              label: 'Northern Territory',
              value: 'NT'
            }],
            onChange: action('onChange - Region')
          },
          {
            input: 'checkbox',
            onChange: action('onChange - T&Cs'),
            checked: false
          }
        ]}
      />
    </CenteredWrapper>
  ))
