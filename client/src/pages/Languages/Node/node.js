import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Node = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Node</h1>
        <p id="description">
          <span id="firstword"> Node.js</span> is an open-source, cross-platform
          JavaScript run-time environment that executes JavaScript code outside
          of a browser. Node.js lets developers use JavaScript to write Command
          Line tools and for server-side scripting—running scripts server-side
          to produce dynamic web page content before the page is sent to the
          user's web browse
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
              <a href="https://www.codecademy.com/learn/learn-sql">
                Code Academy
              </a>
            </p>

            <p>
              <a href="https://www.udemy.com/topic/mysql/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/intro-to-relational-databases--ud19">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="node js" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="node js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Node;
