import React, { Component } from "react";
import "./favstyle.css";
import axios from "axios";

<<<<<<< HEAD
class Favourite extends Component {
  state = {
    articles: []
  };

  componentDidMount = () => {
    console.log("SESSION STORAGE:" + sessionStorage.getItem("username"));
    console.log("trig");
    this.getArticles();
  };

  getArticles = () => {
    axios
      .get(
        "/user/articles/" + this.props.username ||
          sessionStorage.getItem("username")
      )
      .then(response => {
        console.log("success");
        console.log("prop", this.props.username);

        let articles = response.data[0].articles;
        this.setState({ articles });

        console.log(this.state.articles);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  // Delete Articles

  deleteArticle = id => {
    axios
      .post(`/user/articles/${this.props.username}/${id}`)
      .then(response => {
        console.log("success", response);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 id="favtitle">FAVOURITES</h1>
        <div className=" saved-container">
          <div className="saved-deck">
            <h1 className="saved-section">JOB POSTINGS</h1>
            <div className="scrollmenu">
              <a className="saveditem" href="#home">
                Junior Tech Summit
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
            </div>
          </div>
        </div>
        <div className=" saved-container">
          <div className="saved-deck">
            <h1 className="saved-section">ARTICLES</h1>
            <div className="scrollmenu">
              {this.state.articles.map(article => {
                let link = (
                  <div>
                    <a className="saveditem" href={article.link}>
                      {article.title}
                    </a>
                    {/* DELETE ARTICLES SAMPLE */}
                    {/* <button
                      onClick={this.deleteArticle.bind(this.state, article._id)}
                    >
                      delete
                    </button> */}
                  </div>
                );
                return link;
              })}
              {this.link}
            </div>
          </div>
        </div>
        <div className=" saved-container">
          <div className="saved-deck">
            <h1 className="saved-section">MEETUPS</h1>
            <div className="scrollmenu">
              <a className="saveditem" href="#home">
                How To be A Dev
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
              <a className="saveditem" href="#home">
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
=======
const Favourite = () => {
  return (
    <div className="container">
      <h1 id="favtitle">FAVOURITES</h1>
      <div className=" saved-container">
        <div className="saved-deck">
          <h1 className="saved-section">ARTICLES</h1>
          <div className="scrollmenu">
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>

            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
          </div>
        </div>
      </div>
      <div className=" saved-container">
        <div className="saved-deck">
          <h1 className="saved-section">MEETUPS</h1>
          <div className="scrollmenu">
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>

            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
            <a className="saveditem" href="#home">
              Junior Tech Summit{' '}
              <img
                className="github-img"
                src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png"
                width="50px"
              />
              <button class="btn btn-primary deletebtn">X</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

>>>>>>> 94ea84be61f200c4ed83b8b545ad4d1a86e7d8ea
export default Favourite;
