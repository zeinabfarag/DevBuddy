import React, { Component } from "react";
import "./FrontPage.css";
import Articles from "../../components/DevArticles";
import Stackover from "../../components/Questions";
import Resources from "../../components/Video";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Dev Buddy</span>
          </div>
        </div>

        <section className="section section-dark ">
          <h2 className="front-title">MEET DEV BUDDY</h2>
          <img
            className="about-logo"
            src="/asset/images/debuddy.png"
            width="300px"
            alt=""
          />

          <h4 className="about-font"> A Developer Resource Site</h4>
          <p className="about-font">
            The Dev Buddy site assists students on their journey to becoming a Developer by providing a central location for resources.
          </p>
          <p className="about-font">
            The site was created by graduates of the Full Stack Developer Bootcamp to offer others easy access to helpful tools and tips.
          </p>

        </section>

        <div className="pimg2">
          <div className="ptext">
          </div>
        </div>

        <section className="section section-dark">

          <h2 className="front-title">ACCESS EVERYTHING YOU NEED!</h2>
          <div id="main">
            <h1 id="maintitle"> Videos</h1>
            <Link
              to="/resources"
              className="btn btn-link text-secondary"

            >
              <button type="button" className="btn btn-outline-secondary">
                See More
                </button>
            </Link>


          </div>
          <div className="frontpage-section">
            <Resources />
          </div>
          <div id="main">
            <h1 id="maintitle"> Web Development Articles
            <Articles /></h1>

            <Link
              to="/resources"
              className="btn btn-link text-secondary"

            >
              <button type="button" className="btn btn-outline-secondary">
                Read More
                </button>
            </Link>
          </div>

          <div id="main">
            <h1 id="maintitle"> Questions
            <Stackover /></h1>
          </div>

        </section>


        {/* <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Articles</span>
          </div>
        </div> */}

        {/* <section className="section section-dark"> */}
        {/* <Articles /> */}
        {/* </section> */}

        {/* <div className="pimg5">
          <div className="ptext">
            <span className="border trans">Meetups</span>
          </div>
        </div> */}

        <section className="section section-dark" />

        <div className="pimg1">
          <div className="ptext">
            <span className="border">Dev Buddy</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
