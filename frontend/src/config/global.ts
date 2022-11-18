import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap');

    html {
        font-size: 16px;
    }

    html, 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
    }

    body {
        display: inline-block;
        background: #F9EFEF;
        color: #000;
        max-width: 100%;
    }
`