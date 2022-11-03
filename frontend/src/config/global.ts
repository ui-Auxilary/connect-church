import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
    }

    html, 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: inline-block;
    }
`