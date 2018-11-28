import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const MySQL = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> MySQL</h1>
        <p id="description">
          <span id="firstword"> MySQL</span> is an open source relational
          database management system. SQL is a domain-specific language used in
          programming and is designed for managing data.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://www.mysql.com/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/sql/">W3 Schools</a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/mysql/">
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
              <a href="https://www.udacity.com/course/intro-to-relational-databases--ud197">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="mysql" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="mysql" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySQL;
