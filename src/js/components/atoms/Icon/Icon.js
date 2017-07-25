import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import camera from 'i/icons/camera.svg'
import more from 'i/icons/more.svg'
import select from 'i/icons/select.svg'
import like from 'i/icons/like.svg'
import unlike from 'i/icons/unlike.svg'

const IconContainer = styled.i`
    display: inline-block;
    width: ${props => props.w}px;
    height: ${props => props.h}px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    ${props => props.t === 'camera' && css`
        background-image: url(${camera});
    `}

    ${props => props.t === 'more' && css`
        background-image: url(${more});
    `}

    ${props => props.t === 'like' && css`
        background-image: url(${like});
    `}

    ${props => props.t === 'unlike' && css`
        background-image: url(${unlike});
    `}

    ${props => props.t === 'select' && css`
        background-image: url(${select});
    `}
`

const Icon = ({ width, height, kind }) => (
    <IconContainer
        t={ kind }
        w={ width }
        h={ height } />
)

Icon.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired
}

export default Icon
