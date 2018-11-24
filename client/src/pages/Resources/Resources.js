import React from "react";
import Video from "../../components/Video";
import Questions from "../../components/Questions";
import "./Resources.css";

const Resources = props => {
  return (
    <div className="container">
      <h1 id="pagetitle"> Resources</h1>

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
            <a href="https://www.freecodecamp.org/">Free Code Camp</a>
          </p>
          <p>
            <a href="https://www.codecademy.com/">Code Academy</a>
          </p>
          <p>
            <a href="https://www.udemy.com/courses/search/?q=web%20development&src=sac&kw=web%20de">
              Udemy
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="h-100 col-lg-12  card">
          <h2 className="title"> Videos</h2>
          <Video />
        </div>
      </div>

      <div className="row">
        <div className="h-100 col-lg-12  card">
          <h2 className="title"> Questions</h2>
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default Resources;
