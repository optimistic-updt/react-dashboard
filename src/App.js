import React from 'react';
import './grid.css';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  state = {
    content: "",
    output: ""
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }


  fetchSentiment = (e) => {
    e.preventDefault()

    let apiRequest = {
      method: 'post',
      url: 'https://sentim-api.herokuapp.com/api/v1/',
      headers: {
        'Accept': "application/json", 
        "Content-Type": "application/json"
      },
      data: { 
        "text": this.state.content 
      },
    }

    axios(apiRequest)
      .then(res => {
        let { type } = res.data.result

        if (type === "positive") {
          this.setState({
            output: "Awesome, I'm glad to hear!"
          })
        } else {
          // fetch a compliment and render it
          axios('https://complimentr.com/api')
            .then(res => {
              let { compliment } = res.data

              this.setState({
                output: compliment
              })
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }



  getLocation = () => {

    function extractLocation(position) {
      let { latitude , longitude } = position.coords
      console.log(`lat ${latitude} & long ${longitude}`);
    }
  
    function locNotSupported() {
      console.log("Unable to retrieve location information");
    }


    if (navigator.geolocation) {
      console.log("Finding you in the world...");
      navigator.geolocation.getCurrentPosition(extractLocation, locNotSupported);
    } else { 
      console.log("location not supported by browser");
    }
  }


  render(){

    return (
      <div className="App">
        <header className="main-header section group">
          <img src="../logo192.png" alt="logo" className="logo"/>
          
          <nav className="nav">
            <a href="#">Overview</a>
            <a href="#">Calendar</a>
            <a href="#">Finance</a>
            <a href="#">Fitness</a>
          </nav>
          <button className="button button-user">User</button>
        </header>

        <main>
          <section className="section section--feeling span_2_of_4">
            <form action="">
              <input type="text" placeholder="How are you feeling today?" onChange={this.handleChange}/>
              <output>{this.state.output}</output>
              <button onClick={this.fetchSentiment} className="button button-analyse" disabled={this.state.content.length === 0}>Analyze</button>
            </form>
          </section>

          <section className="section section--sleeptracker span_1_of_4">
            <h4>How many hours did you sleep?</h4>
            <input type="number"/>
            <h4>How well did you sleep?</h4>
            <input type="text"/>
          </section>


          <section onLoad={this.getLocation} className="section section--weather span_1_of_4">
            <h4>city / location </h4>
            <span>icon</span>
            <span>23ºC</span>
            <label className="switch">
              <input type="checkbox" name="" id="" />
              <span className="slider"></span>
            </label>
          </section>



          <section className="section--calendar"></section>
          <section className="section--news"></section>
          <section className="section--todo"></section>
          <section></section>
        </main>

        <footer className="main-footer">
          <p>&copy; Kevin Garcia Fernandez</p>
          <i>GitHub</i>
          <i>GitHub</i>
          <i>GitHub</i>
          <i>GitHub</i>
        </footer>

      </div>
    );
  }
}

export default App;
