import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Express = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Express</h1>
        <p id="description">
          <span id="firstword"> Express</span> is a minimal and flexible Node.js
          web application framework that provides a robust set of features to
          develop web and mobile applications. It facilitates the rapid
          development of Node based Web applications.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://expressjs.com/">Documentation </a>
            </p>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs">
                Mozilla Developer Network
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/expressjs/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/learn/learn-express">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/learn-express/">Udemy </a>
            </p>
            <p>
              <a href="https://www.coursera.org/courses?query=node%20js">
                Coursera
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="expressjs" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="express" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Express;
