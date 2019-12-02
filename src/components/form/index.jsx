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
const getFieldComponent = ({ input, ...fieldProps }) => {
  switch (input) {
  case 'text':
    return <Input {...fieldProps} />
  case 'select':
    return <Dropdown {...fieldProps} />
  case 'checkbox':
    return <Checkbox {...fieldProps} />
  default:
    return null
  }
}

const Form = ({ fields, ...htmlAttributes }) => {
  return (
    <Container {...htmlAttributes}>
      {fields.map(field =>
        getFieldComponent(field)
      )}
    </Container>
  )
}

Form.propTypes = {
  fields: propTypes.array
}

export default Form
