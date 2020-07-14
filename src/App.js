import React from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { lightTheme, darkTheme } from './theme'

import { useDarkMode } from './useDarkMode'

import HeaderMain from './Header_main_component/Header_main';
import Sentiment from './Sentiment_component/Sentiment'
import Weather from './Weather_Component/Weather'
import ToDo from './To_do_component/ToDo'
import FooterMain from './Footer_main_component/Footer_main'
import ChartWidget from './components/Chart';
import News from './components/News';

const dotenv = require('dotenv');
dotenv.config();




function App() {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
          <div className="App">

            <HeaderMain theme={theme} toggleTheme={toggleTheme}/>

            <main className="main-wrapper">
              <Sentiment />
              <Weather />
              <ToDo />
              <ChartWidget />
              <News />
            </main>

            <FooterMain />
          </div>
      </>
    </ThemeProvider>
  );
}

export default App;
