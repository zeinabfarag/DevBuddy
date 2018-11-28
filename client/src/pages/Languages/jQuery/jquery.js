import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const jQuery = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> jQuery</h1>
        <p id="description">
          <span id="firstword"> jQuery</span> is a JavaScript library designed
          to simplify HTML DOM tree traversal and manipulation, as well as event
          handling, animation, and Ajax.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://jquery.com/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/jquery/">W3 Schools</a>
            </p>

            <p>
              <a href="https://www.tutorialspoint.com/jquery/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/learn/learn-jquery">
                Code Academy
              </a>
            </p>

            <p>
              <a href="https://www.udemy.com/jquery/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/intro-to-jquery--ud245">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="jquery" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="jquery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default jQuery;
