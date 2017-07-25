import styled from 'styled-components'

export const Form = styled.form``

export const FormField = styled.div`
    display: flex;
    padding: 8px;
    background-color: #fff;
    border-color: ${props => props.theme.palette.gray[1]};
    border-style: solid;
    border-width: 0 0 1px 0;

    & + & {
        border-width: 1px 0;
        margin-top: 14px;

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            border-width: 0.5px 0;
        }
    }

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        border-width: 0 0 0.5px 0;
    }
`

export const FormAction = styled.div`
    display: flex;
    margin-top: 14px;
    padding: 0 8px;

    button + button {
        margin-left: 8px;
    }
`
