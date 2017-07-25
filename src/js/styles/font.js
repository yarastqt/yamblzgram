import { css } from 'styled-components'

import robotoCyrillic400 from 'fonts/uYECMKoHcO9x1wdmbyHIm3-_kf6ByYO6CLYdB4HQE-Y.woff2'
import robotoLatin400 from 'fonts/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2'
import robotoCyrillic500 from 'fonts/oHi30kwQWvpCWqAhzHcCSIX0hVgzZQUfRDuZrPvH3D8.woff2'
import robotoLatin500 from 'fonts/RxZJdnzeo3R5zSexge8UUZBw1xU1rKptJj_0jans920.woff2'

const font = css`
    /* cyrillic */
    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        src: local('Roboto'), local('Roboto-Regular'), url(${robotoCyrillic400}) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin */
    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        src: local('Roboto'), local('Roboto-Regular'), url(${robotoLatin400}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
        src: local('Roboto Medium'), local('Roboto-Medium'), url(${robotoCyrillic500}) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin */
    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
        src: local('Roboto Medium'), local('Roboto-Medium'), url(${robotoLatin500}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
`

export default font
