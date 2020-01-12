import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Footer from '.'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`

const Page = styled.div`
  width: 80%;
`

const stories = storiesOf('Footer', module)
stories.addDecorator(withKnobs)

const getColumnItems = (numberOfItems, prefix) => [...Array(numberOfItems).keys()].map(number => ({
  text: `Col ${prefix} Link ${number + 1}`,
  href: '#'
}))

const getRandomNumber = maxNumber => Math.floor(Math.random() * maxNumber) + 1

const columns = [...Array(3).keys()].map(colNumber => ({
  header: `Column ${colNumber + 1}`,
  items: getColumnItems(getRandomNumber(5), colNumber + 1)
}))

stories
  .add('Default', () => (
    <Container>
      <Page>
        <Footer columns={columns} />
      </Page>
    </Container>
  ))
