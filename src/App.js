import React from 'react';
import './grid.css';
import './App.css';
// import axios from 'axios';

import HeaderMain from './Header_main_component/Header_main';
import Sentiment from './Sentiment_component/Sentiment'
import Weather from './Weather_Component/Weather'
import ToDo from './To_do_component/ToDo'
import FooterMain from './Footer_main_component/Footer_main'

const dotenv = require('dotenv');
dotenv.config();



class App extends React.Component {

  state = {
    darkMode: true
  }

  render(){
    return (
      <div className="App">
        
        <HeaderMain />
  
        <main className="main-wrapper">
          <Sentiment />
          <Weather />
          <ToDo />
        </main>
  
        <FooterMain />
  
      </div>
    );
  }
}

export default App;



        {/* <section className="section section--sleeptracker span_1_of_4">
          <h4>How many hours did you sleep?</h4>
          <input type="number"/>
          <h4>How well did you sleep?</h4>
          <input type="text"/>
        </section> */}