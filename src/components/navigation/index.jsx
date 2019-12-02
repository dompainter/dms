import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import NavigationItem from '../navigation-item'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Navigation = ({ items, ...htmlAttributes }) => {
  return (
    <Container {...htmlAttributes}>
      {items.map(item =>
        <NavigationItem
          key={item.label}
          href={item.href}
          active={item.active}
        >
          {item.label}
        </NavigationItem>
      )}
    </Container>
  )
}

Navigation.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string,
      label: propTypes.string,
      isExternal: propTypes.bool
    })
  )
}

export default Navigation
