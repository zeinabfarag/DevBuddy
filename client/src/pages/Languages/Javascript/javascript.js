import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const JavaScript = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> JavaScript</h1>
        <p id="description">
          <span id="firstword"> JavaScript </span> is a dynamic computer
          programming language. It is lightweight and most commonly used as a
          part of web pages, whose implementations allow client-side script to
          interact with the user and make dynamic pages.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">
                Mozilla Developer Network
              </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/js/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/javascript/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>

            <p>
              <a href="https://www.codecademy.com/learn/introduction-to-javascript">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/topic/javascript/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/intro-to-javascript--ud803">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query=" javascript" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
