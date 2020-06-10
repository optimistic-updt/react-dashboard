import React from 'react';
import './grid.css';
import './App.css';
// import axios from 'axios';

import Header_main from './Header_main_component/Header_main';
import Sentiment from './Sentiment_component/Sentiment'
import Weather from './Weather_Component/Weather'
import ToDo from './To_do_component/ToDo'
import Footer_main from './Footer_main_component/Footer_main'

const dotenv = require('dotenv');
dotenv.config();



function App() {

  return (
    <div className="App">
      
      <Header_main />

      <main className="main-wrapper">
        <Sentiment />
        <Weather />
        <ToDo />
      </main>

      <Footer_main />

    </div>
  );
}

export default App;



        {/* <section className="section section--sleeptracker span_1_of_4">
          <h4>How many hours did you sleep?</h4>
          <input type="number"/>
          <h4>How well did you sleep?</h4>
          <input type="text"/>
        </section> */}