import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { midnight, white } from '../../utils/pallette'
import getFont from '../../utils/font'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 5px 25px 5px 5px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${white};
  stroke-width: 4px;
`

const Box = styled.div`
  display: inline-block;
  padding: 5px 10px;
  color: ${white};
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${midnight};
  height: 30px;
  width: 100%;
  transition: all 150ms;

  ${Icon} {
    visibility: ${({ checked }) => checked ? 'visible' : 'hidden'}
  }
`

const Label = styled.span`
  font: ${getFont()};
  display: inline;
  padding: 0 5px;
`

const Checkbox = ({ onChange, checked, label, ...htmlAttributes }) => {
  return (
    <Container>
      <BoxContainer {...htmlAttributes} onClick={onChange}>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <Box checked={checked}>
          <Icon viewBox="2 -3 20 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </Box>
      </BoxContainer>
      <Label>{label}</Label>
    </Container>
  )
}

Checkbox.propTypes = {
  onChange: propTypes.func,
  checked: propTypes.bool,
  label: propTypes.string
}

export default Checkbox
