import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../input'
import Checkbox from '../checkbox'
import Dropdown from '../dropdown'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

// eslint-disable-next-line react/prop-types
const getFieldComponent = ({ input, ...fieldProps }, index) => {
  switch (input) {
  case 'text':
    return <Input key={index} {...fieldProps} />
  case 'select':
    return <Dropdown key={index} {...fieldProps} />
  case 'checkbox':
    return <Checkbox key={index} {...fieldProps} />
  default:
    return null
  }
}

const Form = ({ fields, ...htmlAttributes }) => {
  return (
    <Container {...htmlAttributes}>
      {fields.map((field, index) =>
        getFieldComponent(field, index)
      )}
    </Container>
  )
}

Form.propTypes = {
  fields: propTypes.array
}

export default Form
