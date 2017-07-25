import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationBarContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    z-index: 1000;
    background-color: ${props => props.theme.palette.gray[0]};
    border-bottom: 1px solid ${props => props.theme.palette.gray[1]};
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        border-bottom-width: 0.5px;
    }
`

const NavigationBar = ({ children }) => (
    <NavigationBarContainer>
        { children }
    </NavigationBarContainer>
)

NavigationBar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default NavigationBar
