import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import SearchBar from '.'
import styled from 'styled-components'

const stories = storiesOf('SearchBar', module)
stories.addDecorator(withKnobs)

const StyledSearchBar = styled(SearchBar)`
  width: 500px;
`

stories
  .add('Default', () => (
    <CenteredWrapper>
      <StyledSearchBar
        placeholder={text('Placeholder', 'Search...')}
        onSearch={action('onSearch')}
      />
    </CenteredWrapper>
  ))
