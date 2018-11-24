import React, { Component } from 'react';
import './FrontPage.css';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Dev Buddy</span>
          </div>
        </div>

        <section className="section section-light">
          <h2>About</h2>
          <p>
            Group of students trying to make it easy to learn coding and
            development
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Resources</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Resources</h2>
          <p>some more talking</p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Articles</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Articles</h2>
          <p>some more talking</p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Job Posting</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Some section</h2>
          <p>some more talking</p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Meetups</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Some section</h2>
          <p>some more talking</p>
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
