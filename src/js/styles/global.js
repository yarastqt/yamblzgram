import { css } from 'styled-components'

import font from './font'

const globalStyles = css`
    ${font}

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
        font: 10px/1.6 'Roboto', Arial, sans-serif;
    }

    body {
        color: #262626;
        background-color: #fff;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-touch-callout: none;
        -webkit-text-size-adjust: none;
        -webkit-user-select: none;
    }
`

export default globalStyles
