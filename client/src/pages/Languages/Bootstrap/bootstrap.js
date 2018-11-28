import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Bootstrap = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Bootstrap</h1>
        <p id="description">
          <span id="firstword"> Bootstrap</span> is a free and open-source
          front-end framework for designing websites and web applications. It
          contains HTML- and CSS-based design templates for typography, forms,
          buttons, navigation and other interface components, as well as
          optional JavaScript extensions.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://getbootstrap.com/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/bootstrap/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/bootstrap/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/courses/make-a-website/lessons/bootstrap/exercises/css-frameworks">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/topic/bootstrap/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/responsive-web-design-fundamentals--ud893">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="bootstrap" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="bootstrap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
