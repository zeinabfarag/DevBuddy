import React, { Component } from "react";
import Video from "../../components/Video";
import Questions from "../../components/Questions";

class Resources extends Component {
  render() {
    return (
      <div className="container">
        <h1> Resources</h1>
        <div className="row" />
        <div className="col-lg-3" />
        <h2> Educational!</h2>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/">
              Mozilla Developer Network
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/">W3 Schools</a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/web_development_tutorials.htm">
              Tutorials Point
            </a>
          </li>
        </ul>

        <div className="col-lg-3" />
        <h2> Online Courses!</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/">Free Code Camp</a>
          </li>
          <li>
            <a href="https://www.codecademy.com/">Code Academy</a>
          </li>
          <li>
            <a href="https://www.udemy.com/courses/search/?q=web%20development&src=sac&kw=web%20de">
              Udemy
            </a>
          </li>
        </ul>

        <div className="col-lg-3" />
        <h2> Videos!</h2>
        <Video />
        <div className="col-lg-3" />
        <Questions />
      </div>
    );
  }
}

export default Resources;
