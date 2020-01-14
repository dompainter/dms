import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import CenteredWrapper from '../../storybook/components/centered-wrapper'
import Socials from '.'

const stories = storiesOf('Socials', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <CenteredWrapper>
      <Socials
        twitterUrl={text('Twitter', '/')}
        facebookUrl={text('Facebook', '/')}
        instagramUrl={text('Instagram', '/')}
        style={{ width: '50%' }}
        backgroundColour={select('Border Colour', ['none', 'midnight', 'porcelain', 'green', 'red', 'white', 'blue', 'black'])}
      />
    </CenteredWrapper>
  ))
