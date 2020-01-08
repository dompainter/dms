import React from 'react'
import styled from 'styled-components'
import {
  black,
  blue,
  green,
  midnight,
  porcelain,
  red,
  white
} from '../../utils/pallette'
import getFont from '../../utils/font'

const Block = styled.div`
  width: 150px;
  height: 150px;
  padding: 15px;
`

const Circle = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ colour }) => colour};
  color: ${({ fontColour }) => fontColour};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColourGrid = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  flex-wrap: wrap;
`

const Text = styled.span`
  font: ${getFont({ size: 16 })};
`

const Colours = () => {
  const colours = [
    { name: 'Black', value: black, fontColour: white },
    { name: 'Blue', value: blue, fontColour: white },
    { name: 'Green', value: green, fontColour: white },
    { name: 'Midnight', value: midnight, fontColour: white },
    { name: 'Porcelain', value: porcelain, fontColour: midnight },
    { name: 'Red', value: red, fontColour: white },
    { name: 'White', value: white, fontColour: midnight }
  ]

  return (
    <ColourGrid>
      {colours.map(({ name, value, fontColour }) => (
        <Block key={name}>
          <Circle colour={value} fontColour={fontColour}>
            <Text>{name}</Text>
          </Circle>
        </Block>
      ))}
    </ColourGrid>
  )
}

export default Colours
