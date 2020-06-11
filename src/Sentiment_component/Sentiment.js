import React from 'react'
import './Sentiment.css'

import Input from '../Input/Input'
import axios from 'axios';


class Sentiment extends React.Component {

  state = {
    content: "",
    output: "",
    isLoading: false,
  }
  
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  
  fetchSentiment = (e) => {
    e.preventDefault()
    this.setState({
      isLoading: true
    })
  
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
            output: "Awesome, I'm glad to hear!",
            isLoading: false
          })
        } else {

          // fetch a compliment and render it
          axios('https://complimentr.com/api')
            .then(res => {
              let { compliment } = res.data
  
              this.setState({
                output: compliment,
                isLoading: false
              })
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let {output, isLoading} = this.state

    return(
      <section className="widget section--feeling sentiment">
        <form action="">
          <input type="text" placeholder="How are you feeling today?" onChange={this.handleChange}/>
          
          <output>{isLoading ? "Thinking..." : output}</output>

          <button 
            onClick={this.fetchSentiment} 
            className="button button-analyse" 
            disabled={this.state.content.length === 0}
            >Analyze
          </button>

        </form>
      </section>
    )
  }
}

export default Sentiment