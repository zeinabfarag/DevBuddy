import React, { Component } from "react";
import Video from "../../components/Video";
import Questions from "../../components/Questions";
import "./Resources.css";
import Languages from "../../components/Languages";

class Resources extends Component {
  render() {
    return (
      <div className="container">
        {sessionStorage.getItem("username") !== "null" && <Languages />}

        <div id="main">
          <h1 id="maintitle"> Resources</h1>
          <p id="description">
            <span id="firstword"> Learning</span> and discovering the multiple
            resources available online is the first step to truly becoming a web
            developer. Remember Google is your best friend! Here are some of our
            favourite resources that we use on a regular basis.
          </p>
        </div>

        <div className="maincontainer">
          <div className="row">
            <div className="card  ">
              <h2 className="title"> Educational</h2>
              <p>
                <a href="https://developer.mozilla.org/en-US/">
                  Mozilla Developer Network
                </a>
              </p>
              <p>
                <a href="https://www.w3schools.com/">W3 Schools</a>
              </p>
              <p>
                <a href="https://www.tutorialspoint.com/web_development_tutorials.htm">
                  Tutorials Point
                </a>
              </p>
            </div>

            <div className="card">
              <h2 className="title"> Online Courses</h2>

              <p>
                <a href="https://www.codecademy.com/">Code Academy</a>
              </p>
              <p>
                <a href="https://www.udemy.com/courses/search/?q=web%20development&src=sac&kw=web%20de">
                  Udemy
                </a>
              </p>
              <p>
                <a href="https://eu.udacity.com/course/web-development--cs253">
                  Udacity
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="h-100 col-lg-11 card " id="youtube">
              <h2 className="title"> YouTube Videos</h2>
              <Video />
            </div>
          </div>
          <div className="row">
            <div className="h-100 col-lg-11  card">
              <h2 className="title"> Stack Overflow Questions</h2>
              <Questions />
            </div>
          </div>
          {sessionStorage.getItem("username") === "null" && (
            <div>
              Not sure where to start? Login/Sign Up for a more detailed
              selection of resources
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Resources;
