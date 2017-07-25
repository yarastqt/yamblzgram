import React from 'react'
import styled, { css } from 'styled-components'

const ModalContainer = styled.div`
    position: fixed;
    z-index: 9000;
    background-color: ${props => props.theme.palette.gray[0]};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 150ms ease-in-out;

    ${props => !props.visible && css`
        transform: translateX(100%);
    `}
`

const ModalHeading = styled.div`
    font-weight: 600;
    font-size: 1.6rem;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    background-color: ${props => props.theme.palette.gray[0]};
    border-bottom: 1px solid ${props => props.theme.palette.gray[1]};

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        border-bottom-width: 0.5px;
    }
`

const Modal = ({ visible, heading, children }) => (
    <ModalContainer visible={ visible }>
        <ModalHeading>{ heading }</ModalHeading>
        { children }
    </ModalContainer>
)

export default Modal
