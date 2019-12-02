import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Navigation from '.'

const stories = storiesOf('Navigation', module)
stories.addDecorator(withKnobs)

const StyledNav = styled(Navigation)`
  width: 50%;
`

stories
  .add('Default', () => (
    <CenteredWrapper>
      <StyledNav
        items={[
          { href: '#', label: 'Home' },
          { href: '#', label: 'About' },
          { href: '#', label: 'Contact', active: true },
          { href: '#', label: 'Directions', isExternal: true }
        ]}
      />
    </CenteredWrapper>

  ))
