import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`

const CenteredWrapper = ({ children, ...htmlAttributes }) => (
  <CenteredDiv {...htmlAttributes}>
    {children}
  </CenteredDiv>
)

CenteredWrapper.propTypes = {
  children: propTypes.node
}

export default CenteredWrapper
