import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { midnight, white, red } from '../../utils/pallette'
import getFont from '../../utils/font'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`

const TextInput = styled.input`
  font: ${getFont()};
  padding: 5px 10px;
  color: ${white};
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${midnight};
  height: 30px;
`

const ErrorMessage = styled.p`
  font: ${getFont({ size: 16, weight: 600 })};
  color: ${red};
`

const Input = ({ placeholder, onChange, defaultValue, type, errorMessage }) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        defaultValue={defaultValue}
        type={type}
      />
      {errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </Container>
  )
}

Input.propTypes = {
  placeholder: propTypes.string,
  errorMessage: propTypes.string,
  defaultValue: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func
}

export default Input
