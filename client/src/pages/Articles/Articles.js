import React, { Component } from 'react';
import axios from 'axios';
import { List, ListItem } from '../../components/List';

//import API from "../utils/API";
//import Footer from './src/components/Footer';

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticle();
  }

  loadArticle = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=web%20development&totalResults=15&apiKey=5a7b3ff72dcb4898b5c6ee2013105946'
      )
      .then(res => {
        console.log('res', res.data.articles);
        this.setState({ articles: res.data.articles });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Articles</h2>
        <p className="text-center">Powered by API News</p>
        {this.state.articles.length ? (
          <List>
            {this.state.articles.map(article => (
              <ListItem>
                <a href={article.url}>
                  <strong>{article.title} </strong>
                </a>
                <p className="text-left">by {article.source.name}</p>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
  // return
  //   <h1>This is the Articles page</h1>;
}

export default Articles;
