import React from 'react'
import styled from 'styled-components'

import logo from 'i/logo-light.svg'

const Logo = styled.div`
    width: 100px;
    height: 30px;
    background-image: url(${logo});
    background-size: 100%;
    background-repeat: no-repeat;
    user-select: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

export default Logo
