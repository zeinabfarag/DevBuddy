import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Git = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Git</h1>
        <p id="description">
          <span id="firstword"> Git</span> is a version-control system for
          tracking changes in computer files and coordinating work on those
          files among multiple people. It is primarily used for source-code
          management in software development, but it can be used to keep track
          of changes in any set of file
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://git-scm.com/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/whatis/whatis_github.asp">
                W3 Schools
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/git/">Tutorials Point</a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>

            <p>
              <a href="https://www.codecademy.com/learn/learn-git">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/topic/git/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/how-to-use-git-and-github--ud775">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="github" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="git" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Git;
