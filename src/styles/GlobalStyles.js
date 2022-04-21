import { createGlobalStyle } from "styled-components";

//Baseline CSS Sheet (Global Styles)
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
        margin: 0%;
        height: 100%;
    }

    body {
        margin: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        overflow-x: hidden; 
        background-image: linear-gradient(to bottom right, ${({theme}) => theme.palette.primaryColorDark}, ${({theme}) => theme.palette.primaryColor});
    }
`