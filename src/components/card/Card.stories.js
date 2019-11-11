import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Card from '.'

const stories = storiesOf('Card', module)
stories.addDecorator(withKnobs)

stories
    .add('Default', () => (
        <Card>
            {text('Content', 'Hello World')}
        </Card>
    ))
