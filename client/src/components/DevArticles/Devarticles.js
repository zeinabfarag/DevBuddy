import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

class Devarticles extends Component {
  state = {
    redirect: false,
    articleswdev: []
  };

  componentDidMount() {
    this.callAxios();
  }

  callAxios = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=web%20development&totalResults=15&apiKey=" +
          process.env.REACT_APP_ARTICLES
      )
      .then(res => {
        this.setState({
          articleswdev: res.data.articles
        });
      });
  };

  // function to save aricle on favourites

  clickedToSave = (title, link) => {
    if (this.props.username == null) {
      this.setState({ redirect: true });
    } else {
      let saveArticle = {
        title: title,
        link: link
      };

      axios
        .post(`/user/article/${this.props.username}`, saveArticle)
        .then(function(response) {
          console.log("success", response);
        })
        .catch(function(error) {
          console.log("error", error);
        });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="">
          <div className="row">
            <div className="card articles" id="card">
              {this.state.articleswdev.length ? (
                <div className="overflow">
                  {this.state.articleswdev.map(article => (
                    <div key={article.url}>
                      <a href={article.url}>
                        <strong>{article.title} </strong>
                      </a>
                      <span className="source"> by {article.source.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Devarticles;
