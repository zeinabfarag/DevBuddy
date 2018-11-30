import React, { Component } from 'react';
import './favstyle.css';
import axios from 'axios';

class Favourite extends Component {
  state = {
    articles: []
  };

  componentDidMount = () => {
    this.getArticles();
  };

  getArticles = () => {
    let sessionUser = sessionStorage.getItem('username');
    axios
      .get('/user/articles/' + sessionUser)
      .then(response => {
        console.log('success');
        console.log('prop', this.props.username);

        let articles = response.data[0].articles;
        this.setState({ articles });

        console.log(this.state.articles);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  // Delete Articles

  deleteArticle = id => {
    axios
      .post(`/user/articles/${this.props.username}/${id}`)
      .then(response => {
        this.getArticles();
        console.log('success', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 id="favtitle">SAVED ARTICLES</h1>
        <div className=" maincontainer">
          <div className="row">
            <div className="h-100 col-lg-11  card">
              {this.state.articles.map(article => {
                let link = (
                  <div key={article._id}>
                    <a href={article.link}>
                      <strong>{article.title} </strong>
                    </a>
                    {/* DELETE ARTICLES SAMPLE */}
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={this.deleteArticle.bind(this.state, article._id)}
                    >
                      delete
                    </button>
                  </div>
                );
                return link;
              })}
              {this.link}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Favourite;
