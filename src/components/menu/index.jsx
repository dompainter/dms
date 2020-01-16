import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { blue, porcelain, green } from '../../utils/pallette'
import getFont from '../../utils/font'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${green};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 768px) {
    width: 100%;
  }
`

const MenuItem = styled.a`
  font: ${getFont({ size: 30, weight: 600 })};
  text-decoration: none;
  padding: 10px 0;
  letter-spacing: 0.1rem;
  color: ${porcelain};
  text-decoration: none;
  transition: color 0.2s linear;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${blue};
  }
`

const Menu = ({ menuItems, isOpen }) => {
  console.log('​Menu -> isOpen', isOpen)
  return (
    <StyledMenu isOpen={isOpen}>
      {menuItems.map(({ href, label }) =>
        <MenuItem key={label} href={href}>{label}</MenuItem>
      )}
    </StyledMenu>
  )
}

Menu.propTypes = {
  menuItems: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string,
      label: propTypes.string
    })
  ),
  isOpen: propTypes.bool
}

export default Menu
