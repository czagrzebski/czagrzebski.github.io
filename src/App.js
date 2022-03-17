import React from 'react';
import { GlobalStyle } from "styles/GlobalStyles";
import { themeDefault } from "styles/Theme";
import { ThemeProvider } from 'styled-components';
import Nav from 'components/Nav';
import Hero from 'components/Hero';

function App() {
  return (
    <ThemeProvider theme={themeDefault} >
      <GlobalStyle />
      <Nav />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
