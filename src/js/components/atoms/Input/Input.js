import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputControl = styled.input`
    border: none;
    font: inherit;
    font-size: 1.4rem;
    appereane: none;
    width: 100%;
    height: 40px;
`

const Input = ({ readonly, type, name, value, onClick, placeholder }) => (
    <InputControl
        readOnly={ readonly }
        type={ type }
        name={ name }
        value={ value }
        onClick={ onClick }
        placeholder={ placeholder } />
)

Input.proptypes = {
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    placeholder: PropTypes.string
}

export default Input
