import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Menu from '.'
import Burger from '../burger'

const stories = storiesOf('Menu', module)
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <>
      <Burger
        isOpen={boolean('Burger Open', false)}
        onClick={action('onClick')}
      />
      <Menu
        menuItems={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' }
        ]}
        isOpen={boolean('Menu Open', false)}
      />
    </>
  ))
