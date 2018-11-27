import React, { Component } from "react";
import "./favstyle.css";
import Axios from "axios";

class Favourite extends Component {
  getArticles = () => {
    Axios.get("/user/articles/" + this.props.username)
      .then(function(response) {
        console.log("success", response);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 id="favtitle">FAVOURITES</h1>
        <div className=" saved-container">
          <button onClick={this.getArticles}> test </button>
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
export default Favourite;
