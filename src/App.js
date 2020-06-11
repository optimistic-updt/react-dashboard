import React, { useState } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'

import { useDarkMode } from './useDarkMode'

import HeaderMain from './Header_main_component/Header_main';
import Sentiment from './Sentiment_component/Sentiment'
import Weather from './Weather_Component/Weather'
import ToDo from './To_do_component/ToDo'
import FooterMain from './Footer_main_component/Footer_main'

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
                <div className="widget chart">
                  <img src="https://docs.moodle.org/dev/images_dev/c/c5/bar_chart.png" alt="chart" />
                </div>
                <div className="widget news">news</div>
              </main>

              <FooterMain />
            </div>
        </>
      </ThemeProvider>
    );

}

export default App;



        {/* <section className="section section--sleeptracker span_1_of_4">
          <h4>How many hours did you sleep?</h4>
          <input type="number"/>
          <h4>How well did you sleep?</h4>
          <input type="text"/>
        </section> */}