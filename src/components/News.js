import React from 'react'
import './News.css'
import axios from 'axios';

const dotenv = require('dotenv');
dotenv.config()



class News extends React.Component {

  componentDidMount() {
    // get the news
    let getNews = {
      method: 'get',
      url: 'https://newsapi.org/v2/top-headlines',
      params: {
        country: 'au'
      },
      headers: {
        'X-Api-Key': '270a4d61d2be44d2a20bc69b98a95370' //TODO
        // 'Accept': "application/json", 
        // "Content-Type": "application/json"
      },
    }

    axios(getNews)
    .then(res => {
      //get the image, title, url of the first 5 articles
      let unformatedArticlesResponse = res.data.articles
      let topFiveUnformatedArticles = unformatedArticlesResponse.slice(0,5)
      let parsedTopFiveArticles = topFiveUnformatedArticles.map(article => {
        // return article.title
        let { title, url, urlToImage } = article
        return title
      })
      console.log(parsedTopFiveArticles);

      //set state with that information
      //array of object

    })
    .catch(err => console.log(err))
  }



  render() {

    return (
      <div className="widget news">
        <h4>Today's Headline</h4>
        <ul className="news-list">
          <li className="news-item">
            <a href="https://www.theguardian.com/australia-news/2020/jul/14/better-for-her-majesty-not-to-know-palace-letters-reveal-queens-role-in-sacking-of-australian-pm-whitlam" target="blank" className="news-item-container">
              <img src="https://www.placecage.com/70/70" alt=""/>
              <p className="news-article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque molestias, nisi.</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default News