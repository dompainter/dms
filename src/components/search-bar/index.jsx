import React, { useState } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import getFont from '../../utils/font'
import { green, blue } from '../../utils/pallette'

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid ${green};
`

const StyledInput = styled.input`
  padding-left: 10px;
  border: 0;
  outline: 0;
  width: 100%;
  font: ${getFont({ size: 16 })};
`

const StyledSearchIcon = styled.div`
  color: ${blue};
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  padding-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const SearchBar = ({ placeholder, onSearch, ...htmlAttributes }) => {
  const [searchTerm, setSearchTerm] = useState()
  console.log('​SearchBar -> searchTerm', searchTerm)

  return (
    <Container {...htmlAttributes}>
      <StyledInput placeholder={placeholder} onKeyUp={(e) => setSearchTerm(e.target.value)} />
      <StyledSearchIcon onClick={() => onSearch(searchTerm)}>
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchIcon>
    </Container>
  )
}

SearchBar.propTypes = {
  placeholder: propTypes.string,
  onSearch: propTypes.func
}

export default SearchBar
