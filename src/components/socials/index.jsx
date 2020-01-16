import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { black } from '../../utils/pallette'

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Icon = styled.a`
  &&& {

  font-size: 25px;
  color: ${({ backgroundColour }) => `${backgroundColour}`};
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
  }
`

const Socials = ({ backgroundColour, twitterUrl, instagramUrl, facebookUrl, ...htmlAttributes }) => {
  return (
    <IconGroup {...htmlAttributes}>
      {instagramUrl && (
        <Icon
          target="_blank"
          rel="noopener noreferrer"
          href={instagramUrl}
          backgroundColour={backgroundColour}
        >
          <i className="fab fa-instagram"></i>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
      )}
      {facebookUrl && (
        <Icon
          target="_blank"
          rel="noopener noreferrer"
          href={facebookUrl}
          backgroundColour={backgroundColour}
        >
          <FontAwesomeIcon icon={faFacebookF} />

        </Icon>
      )}
      {twitterUrl && (
        <Icon
          target="_blank"
          rel="noopener noreferrer"
          href={twitterUrl}
          backgroundColour={backgroundColour}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
      )}
    </IconGroup>
  )
}

Socials.propTypes = {
  backgroundColour: propTypes.string,
  twitterUrl: propTypes.string,
  instagramUrl: propTypes.string,
  facebookUrl: propTypes.string
}

export default Socials
