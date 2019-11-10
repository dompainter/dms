import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from '.'

// Add Button to story
const stories = storiesOf('Button', module)
// Add knobs decorator
stories.addDecorator(withKnobs)

stories
    .add('Default', () => (
        <Button onClick={action('clicked')}>
            {text('Content', 'Hello World')}
        </Button>
    ))
