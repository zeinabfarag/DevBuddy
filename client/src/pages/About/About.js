import React, { Component } from 'react';
import './aboutstyle.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="saved-deck">
            <h1 className="saved-section about-title">ABOUT DEVBUDDY</h1>
          </div>
        </div>
        <div className="container saved-container">
          <div className="saved-deck">
            {/* <h1 className="saved-section">PRESS PLAY</h1> */}
            <div class="videoWrapper">
              {/* <!-- Copy & Pasted from YouTube --> */}
              <iframe
                width="560"
                height="349"
                src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        <div className="about-container saved-container">
          <div className="saved-deck">
            <div className="container">
              <h1 className="saved-section about-title">MEET THE TEAM</h1>
              <div class="teamdev">
                <div id="ateam" class="teammembers">
                  <div className="memberimage col-2">
                    <img
                      className="team-img"
                      src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png"
                      width="250px"
                    />
                  </div>
                  <div className="member-info col-8">
                    <h1 className="member-section">Abdulrahman Said</h1>
                    <p className="abouttext">
                      Graduate from Ryerson with a Bachelor of Commerce. Getting
                      ready to jump start my career as a new Dev! Started with
                      taking a Full Stack Development course at UTM focusing on
                      the MERN (Mongo, React, Express, Node.js) stack. 6 months
                      later, I've created multple projects using different
                      technologies that I am really proud of.{' '}
                    </p>
                    <div className="contact-icons">
                      <a href="https://github.com/AbdulSaid">
                        <img
                          className="github-img"
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                          width="50px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="bteam" class="teammembers">
                  <div className="memberimage col-2">
                    <img
                      className="team-img"
                      src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png"
                      width="250px"
                    />
                  </div>
                  <div className="member-info col-8">
                    <h1 className="member-section">Bob</h1>
                    <p className="abouttext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce rutrum eros eget hendrerit bibendum.{' '}
                    </p>
                    <div className="contact-icons">
                      <a href="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png">
                        <img
                          className="github-img"
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                          width="50px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="cteam" class="teammembers">
                  <div className="memberimage col-2">
                    <img
                      className="team-img"
                      src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png"
                      width="250px"
                    />
                  </div>
                  <div className="member-info col-8">
                    <h1 className="member-section">Bob</h1>
                    <p className="abouttext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce rutrum eros eget hendrerit bibendum.{' '}
                    </p>
                    <div className="contact-icons">
                      <a href="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png">
                        <img
                          className="github-img"
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                          width="50px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="adteam" class="teammembers">
                  <div className="memberimage col-2">
                    <img
                      className="team-img"
                      src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png"
                      width="250px"
                    />
                  </div>
                  <div className="member-info col-8">
                    <h1 className="member-section">Bob</h1>
                    <p className="abouttext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce rutrum eros eget hendrerit bibendum.{' '}
                    </p>
                    <div className="contact-icons">
                      <a href="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png">
                        <img
                          className="github-img"
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                          width="50px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div id="eteam" class="teammembers">
                  <div className="memberimage col-2">
                    <img
                      className="team-img"
                      src="https://files.slack.com/files-pri/TA2JAF9B8-FE0THTC1Z/debuddy.png"
                      width="250px"
                    />
                  </div>
                  <div className="member-info col-8">
                    <h1 className="member-section">Bob</h1>
                    <p className="abouttext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce rutrum eros eget hendrerit bibendum.{' '}
                    </p>
                    <div className="contact-icons">
                      <a href="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png">
                        <img
                          className="github-img"
                          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                          width="50px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
