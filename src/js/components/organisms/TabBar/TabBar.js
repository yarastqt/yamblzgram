import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabBarContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    z-index: 1000;
    background-color: ${props => props.theme.palette.gray[0]};
    border-top: 1px solid ${props => props.theme.palette.gray[1]};
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        border-top-width: 0.5px;
    }
`

const TabBar = ({ children }) => (
    <TabBarContainer>
        { children }
    </TabBarContainer>
)

TabBar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default TabBar
