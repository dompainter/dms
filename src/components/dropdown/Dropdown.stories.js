import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Dropdown from '.'

const stories = storiesOf('Dropdown', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Dropdown
        options={[{
          value: 'Frank Lampard',
          label: 'Lampard'
        }, {
          value: 'John Terry',
          label: 'Terry'
        }]}
        onChange={action('onChange')}
      />
    </CenteredWrapper>
  ))
