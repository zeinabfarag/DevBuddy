import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const HTML = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> HTML</h1>
        <p id="description">
          <span id="firstword"> HTML</span> stands for Hypertext Markup Language
          and is the code that is used to structure a web page and its content.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://developer.mozilla.org/kab/docs/Web/HTML">
                Mozilla Developer Network
              </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/html/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/html/">Tutorials Point</a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/learn/learn-html/">
                Code Academy
              </a>
            </p>
            <p>
              <p>
                <a href="https://www.udemy.com/topic/html/">Udemy</a>
              </p>

              <a href="https://in.udacity.com/course/html-and-css-syntax--ud001">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query=" html" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="html" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML;
