import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Redux = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Redux</h1>
        <p id="description">
          <span id="firstword"> Redux</span> is an open-source JavaScript
          library for managing application state. It is most commonly used with
          libraries such as React or Angular for building user interfaces.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://redux.js.org/">Documentation</a>
            </p>
            <p>
              <a href="https://www.valentinog.com/blog/react-redux-tutorial-beginners/">
                React Redux Tutorial
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/reactjs/reactjs_using_flux.htm">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://learn.codecademy.com/build-full-stack-apps-with-react-and-redux.html?utm_source=facebook&utm_content=advanced_react_with_redux">
                Code Academy
              </a>
            </p>

            <p>
              <a href="https://www.udemy.com/react-redux/">Udemy</a>
            </p>
            <p>
              <a href="https://www.coursera.org/lecture/front-end-react/redux-actions-hUr1y">
                Coursera
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="redux" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="redux" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redux;
