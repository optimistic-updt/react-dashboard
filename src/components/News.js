import React from 'react'
import './News.css'
import axios from 'axios';

const dotenv = require('dotenv');
dotenv.config()




class News extends React.Component {

  state = {
    latestNewsArticles : []
  }


  componentDidMount() {
    // console.log(`hey this is the env variable ${ process.env.REACT_APP_NEWS_API_KEY }`);
    console.log(process.env.REACT_APP_TEST);

    let getNews = {
      method: 'get',
      url: 'https://newsapi.org/v2/top-headlines',
      params: { country: 'au' },
      headers: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY }
    }

    axios(getNews)
    .then(res => {
      let latestNewsArticles = extractTopFiveAndParse(res)
      this.setState({ latestNewsArticles: latestNewsArticles })
      function extractTopFiveAndParse(res) {
        let unformatedTwentyArticlesResponse = res.data.articles
        let topFiveUnformatedArticles = unformatedTwentyArticlesResponse.slice(0,5)
        let parsedTopFiveArticles = topFiveUnformatedArticles.map(formatArticles)

        function formatArticles(article) {
          let { title, url, urlToImage } = article
          let parsedArticle = {
            url: url,
            image: urlToImage,
            title: title
          }
          return parsedArticle
        }
        return parsedTopFiveArticles
      } 
    })
    .catch(err => console.log(err))
  }



  render() {
    let { latestNewsArticles } = this.state
    let newsList = latestNewsArticles.map(article => {
      return (
        <li className="news-item">
        <a 
          className="news-item-container"
          href={article.url} 
          target="blank" 
        >
          <img src={article.image} alt="news-article" className="news-item-image"/>
          <p className="news-article-title">{article.title}</p>
        </a>
      </li>
      )
    })

    return (
      <div className="widget news">
        <h4>Today's Headline</h4>
        <ul className="news-list">
          { newsList }
        </ul>
      </div>
    )
  }
}

export default News