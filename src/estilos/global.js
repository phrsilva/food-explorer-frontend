import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        /* Redefine a fonte, de modo que 1rem = 10px */
        font-size: 62.5%;
    }

    body {
        background-color: ${({theme}) => theme.ESCURO.ESCURO_400};

    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover, button:hover {
        filter: brightness(0.8);
    }

`;