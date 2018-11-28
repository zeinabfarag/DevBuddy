import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Angular = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Angular</h1>
        <p id="description">
          <span id="firstword"> Angular.js</span> is a JavaScript-based
          open-source front-end web application framework mainly maintained by
          Google and by a community of individuals and corporations to address
          many of the challenges encountered in developing single-page
          applications.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://angular.io/">Documentation </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/angular/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/angular4/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/learn/learn-angularjs">
                Code Academy
              </a>
              <p>
                <a href="https://www.udemy.com/topic/angular/">Udemy</a>
              </p>
              <p>
                <a href="https://www.coursera.org/courses?query=angular">
                  Coursera
                </a>
              </p>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="angular" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="angular" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Angular;
