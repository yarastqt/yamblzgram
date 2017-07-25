import React from 'react'
import styled, { css } from 'styled-components'

const ButtonContainer = styled.button`
    border: none;
    width: ${props => props.responsive === 'full' ? '100%' : '24px'};
    height: ${props => props.responsive === 'full' ? '40px' : '24px'};
    font: inherit;
    font-size: 1.4rem;
    user-select: none;
    transition: opacity 150ms ease-in-out;
    border-radius: 2px;

    ${props => !props.view && css`
        background: transparent;
    `}

    ${props => props.view === 'primary' && css`
        background-color: #ffcc02;
        color: #fff;
    `}

    ${props => props.view === 'secondary' && css`
        background-color: #ee0000;
        color: #fff;
    `}

    &:active {
        opacity: 0.5;
    }
`

const ButtonWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Button = ({ icon, view, type, responsive, onClick, children }) => (
    <ButtonContainer
        view={ view }
        type={ type }
        responsive={ responsive }
        onClick={ onClick }
        children={children}>
        <ButtonWrapper>
            { icon && icon }
            { children }
        </ButtonWrapper>
    </ButtonContainer>
)

export default Button
