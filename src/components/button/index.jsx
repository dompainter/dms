import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #FFF;
    color: #000;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    outline: 0;

    &:hover {
        background-color: #000;
        color: #FFF;
    }
`

const Button = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
)

Button.propTypes = {
    children: propTypes.node,
    onClick: propTypes.func
}

export default Button
