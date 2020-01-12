import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../button'
import getFont from '../../utils/font'
import { white, porcelain } from '../../utils/pallette'

const ModalContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${white};
  font: ${getFont()};
  border-radius: 5px;
  border: 2px solid ${porcelain};
  width: 40%;
  height: 100%;
`

const Heading = styled.span`
  font: ${getFont({ size: 24 })};
  border-bottom: 1px solid ${porcelain};
  padding: 10px 20px;
  overflow: hidden;
`

const Content = styled.span`
  font: ${getFont({ fontFamily: 'Asap, sans-serif', size: 16 })};
  padding: 20px;
  margin-bottom: 50px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

const ModalButton = styled(Button)`
  margin: 0 10px 10px 0;
`

const Modal = ({
  heading,
  content,
  primaryActionMessage = 'Submit',
  onPrimaryAction,
  cancelMessage = 'Cancel',
  onCancel,
  isVisible
}) => {
  if (!isVisible) return null

  return (
    <ModalContainer>
      {heading && <Heading>{heading}</Heading>}
      <Content>{content}</Content>
      <ButtonContainer>
        <ModalButton onClick={onPrimaryAction}>
          {primaryActionMessage}
        </ModalButton>
        {onCancel && (
          <ModalButton onClick={onCancel}>
            {cancelMessage}
          </ModalButton>
        )}
      </ButtonContainer>
    </ModalContainer>
  )
}

Modal.propTypes = {
  heading: propTypes.string,
  content: propTypes.string,
  primaryActionMessage: propTypes.string,
  onPrimaryAction: propTypes.func,
  cancelMessage: propTypes.string,
  onCancel: propTypes.func,
  isVisible: propTypes.bool
}

export default Modal
