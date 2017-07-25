import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextAreaControl = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    font: inherit;
    font-size: 1.4rem;
    appereane: none;
    border-radius: 0;
`

const TextArea = ({ name, value, onChange, placeholder }) => (
    <TextAreaControl
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }>
    </TextAreaControl>
)

TextArea.proptypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

export default TextArea
