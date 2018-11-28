import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const ReactJS = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> React</h1>
        <p id="description">
          <span id="firstword"> React</span> is a JavaScript library for
          building user interfaces. It is maintained by Facebook and a community
          of individual developers and companies. React can be used as a base in
          the development of single-page or mobile applications.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://reactjs.org/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/whatis/whatis_react.asp">
                W3 Schools
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/reactjs/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/learn/react-101">
                Code Academy
              </a>
            </p>

            <p>
              <a href="https://www.udemy.com/topic/react/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/react-nanodegree--nd019">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="react js" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="react" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactJS;
