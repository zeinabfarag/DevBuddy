import React, { Component } from "react";
import "./FrontPage.css";
import Articles from "../../components/DevArticles";
import Video from "../../components/Video";
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
            Dev Buddy is here for you on your journey to becoming a web
            developer. Whether you are a complete beginner, have dabbled in
            coding, or already have a background in it, Dev Buddy is here to
            help you with a plethora of resources including videos, helpful
            links, and articles. Becoming a web developer has now become a whole
            lot easier.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext" />
        </div>

        <section className="section section-dark ">
          <h2 className="front-title"> WHY WEB DEVELOPMENT?</h2>

          <p className="about-font">
            Web developers are at the forefront of the Internet age. The
            websites we browse, the gifts we order and the news we peruse online
            are all made possible by the web developers who design, build and
            implement Internet websites. They are heavily involved in website
            creation, from helping design aesthetic properties such as layout
            and color, to technical considerations such as how to design a
            website to handle a given amount of Internet traffic.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext" />
        </div>

        <section className="section section-dark ">
          <h2 className="front-title"> YOU ARE VALUABLE </h2>

          <p className="about-font">
            In terms of job availability, the timing really could not be better
            for web developers. there are a plethora of jobs and not enough
            people with the right skills for hire. 61% of executives say they
            face recruitment challenges when it comes to highly skilled and
            technical positions. as the gap between qualified workers and
            unfilled jobs continues to grow, it is expected that the gap will
            grow even greater for those looking for web developers. as any
            business 101 class will teach you, high demand and low supply can
            certainly lead to price increases. in this case, price equals web
            developers’ salaries!
          </p>
        </section>

        <div className="pimg5">
          <div className="ptext" />
        </div>

        <section className="section section-dark">
          <h2 className="front-title">
            ACCESS EVERYTHING YOU NEED RIGHT HERE!
          </h2>
          <div id="main">
            <h1 id="maintitle"> Learn More</h1>
          </div>
          <div className="frontpage-section">
            <Video query="web development 2018" />
          </div>
          <div className="about-font">
            For more resources including educational sites and available online
            courses{" "}
            <Link to="/resources" className="clickhere">
              click here
            </Link>
          </div>
        </section>

        <div className="pimg5">
          <div className="ptext" />
        </div>

        <section className="section section-dark">
          <div id="main">
            <h1 id="maintitle">Read More</h1>
          </div>
          <Articles />
          <div className="about-font">
            For more articles{" "}
            <Link to="/articles" className="clickhere">
              click here
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default FrontPage;
