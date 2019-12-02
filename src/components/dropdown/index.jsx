import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { midnight, white } from '../../utils/pallette'
import getFont from '../../utils/font'

const Select = styled.select`
  font: ${getFont()};
  margin: 5px 10px;
  color: ${white};
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${midnight};
  height: 30px;
  width: 100%;
`

const Dropdown = ({ options, onChange, ...htmlAttributes }) => {
  return (
    <Select {...htmlAttributes} onChange={e => onChange(e.target.value)}>
      {options.map(({ value, label }) =>
        <option key={`option-${value}`} value={value}>{label}</option>
      )}
    </Select>
  )
}

Dropdown.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string
    })
  ),
  onChange: propTypes.func
}

export default Dropdown
