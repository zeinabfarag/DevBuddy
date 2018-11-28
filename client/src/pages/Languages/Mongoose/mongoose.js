import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Mongoose = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> MongoDB</h1>
        <p id="description">
          <span id="firstword"> MongoDB</span> is a free and open-source
          cross-platform document-oriented database program. Classified as a
          NoSQL database program, MongoDB uses JSON-like documents with
          schemata.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://www.mongodb.com/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp">
                W3 Schools
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/mongodb/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://www.codecademy.com/articles/tdd-setup-mongodb">
                Code Academy
              </a>
            </p>

            <p>
              <a href="https://www.udemy.com/mongoose/">Udemy</a>
            </p>
            <p>
              <a href="https://www.udacity.com/course/data-wrangling-with-mongodb--ud032">
                Udacity
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="mongodb" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="mongo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mongoose;
