import { createGlobalStyle } from "styled-components";

//Baseline CSS Sheet (Global Styles)
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
        margin: 0%;
        height: 100vh;
    }

    body {
        margin: 0;
        width: 100%;
        height: 100vh;
        min-height: 100vh;
        overflow-x: hidden; 
        background-color: ${({theme}) => theme.palette.primaryColorDark};
    }
`