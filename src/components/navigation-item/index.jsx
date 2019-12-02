import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { blue, green } from '../../utils/pallette'
import getFont from '../../utils/font'

const Link = styled.a`
  text-decoration: none;
  color: ${blue};
  font: ${getFont()};
  transition: border-color 0.5s ease;
  border-color: transparent;
  font-weight: ${({ active }) => active ? 600 : 'normal'};

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${green};
  }

`

const NavigationItem = ({ active, isExternal, children, href, ...htmlAttributes }) => {
  return (
    <Link
      {...htmlAttributes}
      active={active}
      target={isExternal ? '_blank' : undefined}
      href={href}>
      {children}
    </Link>
  )
}

NavigationItem.propTypes = {
  active: propTypes.bool,
  isExternal: propTypes.bool,
  children: propTypes.node,
  href: propTypes.string
}

export default NavigationItem
