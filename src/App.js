import React from 'react';
import { GlobalStyle } from "styles/GlobalStyles";
import { themeDefault } from "styles/Theme";
import { ThemeProvider } from 'styled-components';
import Nav from 'components/Nav';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Hero from 'components/Hero';

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <ThemeProvider theme={themeDefault} >
      <GlobalStyle />
   
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        duration: 9999999,
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 400
            },
            value: 30
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.05,
              sync: true,
              startValue: "max",
              count: 1,
              destroy: "min"
            },
            value: {
              min: 0,
              max: 0.5
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 2, max: 2 }
          }
        }
      }}
    />
       <Hero />
    </ThemeProvider>
  );
}

export default App;
