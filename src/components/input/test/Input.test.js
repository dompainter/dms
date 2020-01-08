import React from 'react'
import { mount } from 'enzyme'
import Input from '..'

describe('Input', () => {
  const defaultProps = {
    placeholder: 'Placeholder',
    onChange: () => {},
    defaultValue: '',
    type: 'text',
    errorMessage: ''
  }

  const getComponent = (props) => <Input {...props} />

  it('should display error message', () => {
    const errorProps = {
      ...defaultProps,
      errorMessage: 'Error'
    }

    const wrapper = mount(getComponent(errorProps))

    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('p').text()).toBe('Error')
  })
})
