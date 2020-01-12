import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { blue, black, white } from '../../utils/pallette'
import getFont from '../../utils/font'

const StyledButton = styled.button`
  background-color: ${white};
  color: ${blue};
  border: 1px solid ${black};
  border-radius: 5px;
  cursor: pointer;
  outline: 0;
  font: ${getFont()};
  padding: 10px;

  &:hover {
    background-color: ${black};
    color: ${white};
  }
`

const Button = ({ children, onClick, ...htmlAttributes }) => (
  <StyledButton {...htmlAttributes} onClick={onClick}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func
}

export default Button
