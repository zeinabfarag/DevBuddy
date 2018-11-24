import React, { Component } from 'react';
import './FrontPage.css';
import Articles from '../../components/Articles';
import Groups from '../../components/groupevents';
import JobPosting from '../JobPosting';
import Resources from '../Resources';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Dev Buddy</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>About</h2>
          <p>
            Group of students trying to make it easy to learn coding and
            development
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">Resources</span>
          </div>
        </div>

        <section className="section section-dark">
          <Resources />
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Articles</span>
          </div>
        </div>

        <section className="section section-dark">
          <Articles />
        </section>

        <div className="pimg4">
          <div className="ptext">
            <span className="border trans">Job Posting</span>
          </div>
        </div>

        <section className="section section-dark">
          <JobPosting />
        </section>

        <div className="pimg5">
          <div className="ptext">
            <span className="border trans">Meetups</span>
          </div>
        </div>

        <section className="section section-dark">
          <Groups />
        </section>

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
