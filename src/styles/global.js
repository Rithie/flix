import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root, .App {
        height: 100%;
    }

    body {
        text-rendenring: optimizeLegibility !important;
        -webkit-font-smothing: anti-aliased !important;
        background: #181818;
        font-family: 'Montserrat', sans-serif;
    }
`;


