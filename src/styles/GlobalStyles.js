import { createGlobalStyle } from "styled-components";

//Baseline CSS Sheet (Global Styles)
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden; 
        background-color: ${({theme}) => theme.palette.primaryColorDark};
    }
`