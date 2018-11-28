import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const AJAX = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> AJAX</h1>
        <p id="description">
          <span id="firstword"> AJAX</span> is a set of Web development
          techniques using many web technologies on the client side to create
          asynchronous Web applications. With Ajax, web applications can send
          and retrieve data from a server asynchronously without interfering
          with the display and behavior of the existing page
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX">
                Mozilla Developer Network
              </a>
            </p>
            <p>
              <a href="https://www.w3schools.com/xml/ajax_intro.asp">
                W3 Schools
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/ajax/">Tutorials Point</a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/courses/intermediate-javascript-requests/lessons/requests-i/exercises/requests-intro-i?course_redirect=introduction-to-javascript">
                Code Academy
              </a>
            </p>
            <p>
              <a href="https://www.udemy.com/topic/ajax/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/intro-to-ajax--ud110">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="ajax request" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="ajax" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AJAX;
