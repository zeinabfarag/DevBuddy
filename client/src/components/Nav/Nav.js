import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");

    axios
      .post("/user/logout")
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
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="col-md-12">
          {loggedIn ? (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Home
                </button>
              </Link>

              <Link to="/resources" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Resources
                </button>
              </Link>
              <Link to="/articles" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Articles
                </button>
              </Link>
              <Link to="/jobposting" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Job Postings
                </button>
              </Link>
              <Link to="/meetups" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Meetups
                </button>
              </Link>
              <Link to="/favourite" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Favourites
                </button>
              </Link>

              <Link to="/about" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  About
                </button>
              </Link>

              <Link
                to="/"
                className="btn btn-link text-secondary"
                onClick={this.logout}
              >
                <button type="button" className="btn btn-outline-secondary">
                  Logout
                </button>
              </Link>
            </section>
          ) : (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                {/* <span className="badge badge-pill badge-light">Home</span> */}
                <button type="button" className="btn btn-outline-secondary">
                  Home
                </button>
              </Link>

              <Link to="/resources" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Resources
                </button>
              </Link>
              <Link to="/articles" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Articles
                </button>
              </Link>
              <Link to="/jobposting" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Job Postings
                </button>
              </Link>
              <Link to="/meetups" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Meetups
                </button>
              </Link>

              <Link to="/about" className="btn btn-link text-secondary">
                {/* <span className="badge badge-pill badge-light">About</span> */}
                <button type="button" className="btn btn-outline-secondary">
                  About
                </button>
              </Link>

              <Link to="/login" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="btn btn-link">
                <button type="button" className="btn btn-outline-secondary">
                  Sign Up
                </button>
              </Link>
            </section>
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
