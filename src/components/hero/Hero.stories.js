import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Hero from '.'

const Container = styled.div`
  width: 80%;
  height: 300px;
`

const stories = storiesOf('Hero', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Container>
        <Hero
          imageUrl="https://picsum.photos/1280/720"
          heading={text('Heading', 'Hello World')}
          subHeading={text('SubHeading', 'Latest News')}
        />
      </Container>
    </CenteredWrapper>
  ))
