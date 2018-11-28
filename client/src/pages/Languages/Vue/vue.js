import React from "react";
import Languages from "../../../components/Languages";
import Video from "../../../components/Video";
import Questions from "../../../components/Questions";

const Vue = () => {
  return (
    <div className="container">
      <Languages />

      <div id="main">
        <h1 id="maintitle"> Vue</h1>
        <p id="description">
          <span id="firstword"> Vue.js</span> is an open-source JavaScript
          framework for building user interfaces. Integration into projects that
          use other JavaScript libraries is simplified with Vue because it is
          designed to be incrementally adoptable.
        </p>
      </div>

      <div className="maincontainer">
        <div className="row">
          <div className="card  ">
            <h2 className="title"> Educational</h2>
            <p>
              <a href="https://vuejs.org/">Documentation</a>
            </p>
            <p>
              <a href="https://www.w3schools.com/whatis/whatis_vue.asp">
                W3 Schools
              </a>
            </p>
            <p>
              <a href="https://www.tutorialspoint.com/vuejs/">
                Tutorials Point
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="title"> Online Courses</h2>
            <p>
              <a href="https://vueschool.io/courses">Vue School</a>
            </p>

            <p>
              <a href="https://www.udemy.com/topic/vue-js/">Udemy</a>
            </p>
            <p>
              <a href="https://laracasts.com/series/learn-vue-2-step-by-step">
                Laracasts
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11 card " id="youtube">
            <h2 className="title"> YouTube Videos</h2>
            <Video query="vue js" />
          </div>
        </div>
        <div className="row">
          <div className="h-100 col-lg-11  card">
            <h2 className="title"> Stack Overflow Questions</h2>
            <Questions query="vue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vue;
