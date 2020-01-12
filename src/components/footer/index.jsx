import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import getFont from '../../utils/font'
import { green, midnight, porcelain } from '../../utils/pallette'

const Container = styled.div`
  background: ${midnight};
  display: flex;
  flex-direction: row;
  color: ${porcelain};
  justify-content: space-around;
  padding: 15px 0;
`

const Header = styled.h3`
  margin: 0;
  padding-bottom: 10px;
  font: ${getFont({ size: 20 })};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const FooterItem = styled.a`
  font: ${getFont({ size: 16 })};
  text-decoration: none;
  color: ${green};
`

const Footer = ({ columns }) => {
  return (
    <Container>
      {columns.map(({ header, items }, index) =>
        <Column key={index}>
          <Header>{header}</Header>
          {items.map(({ text, href }, itemIndex) =>
            <FooterItem
              key={itemIndex}
              href={href}
            >
              {text}
            </FooterItem>
          )}
        </Column>
      )}
    </Container>
  )
}

Footer.propTypes = {
  columns: propTypes.arrayOf(
    propTypes.shape({
      header: propTypes.string,
      items: propTypes.arrayOf(
        propTypes.shape({
          text: propTypes.string,
          href: propTypes.string
        })
      )
    })
  )
}

export default Footer
