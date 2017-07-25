import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 44px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`

const Content = ({ children }) => (
    <ContentContainer id="content">
        { children }
    </ContentContainer>
)

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

export default Content
