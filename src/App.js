import React from 'react';
import './App.css';
import { GlobalStyle } from "styles/GlobalStyles";
import { themeDefault } from "styles/Theme";
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={themeDefault} >
      <GlobalStyle />
      <h2 style={{color: themeDefault.palette.textPrimaryColor, textAlign: "center"}}>Personal Portfolio</h2>
    </ThemeProvider>
  );
}

export default App;
