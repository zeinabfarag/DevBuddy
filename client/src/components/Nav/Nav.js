import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

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
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    let loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <nav className="navbar sticky-top  bg-light">
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

              <Link to="/comments" className="btn btn-link text-secondary">
                <button type="button" className="btn btn-outline-secondary">
                  Community
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
export default withRouter(Nav);
