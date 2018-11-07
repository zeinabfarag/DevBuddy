import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios
      .post('/user/logout')
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('Navbar render, props: ');
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-md-12">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">Home</span>
                </Link>
                <Link to="/resources" className="btn btn-link text-secondary">
                  <span className="text-secondary">Resources</span>
                </Link>
                <Link to="/articles" className="btn btn-link text-secondary">
                  <span className="text-secondary">Articles</span>
                </Link>
                <Link to="/jobposting" className="btn btn-link text-secondary">
                  <span className="text-secondary">Job Posting</span>
                </Link>
                <Link to="/meetups" className="btn btn-link text-secondary">
                  <span className="text-secondary">Meetups</span>
                </Link>
                <Link to="/about" className="btn btn-link text-secondary">
                  <span className="text-secondary">About</span>
                </Link>
                <Link
                  to="/"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">Home</span>
                </Link>
                <Link to="/about" className="btn btn-link text-secondary">
                  <span className="text-secondary">About</span>
                </Link>
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </section>
            )}
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler" />
            <h1 className="App-title">Dev Buddy</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
