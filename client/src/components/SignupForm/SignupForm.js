import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!this.state.username || !this.state.password) {
          alert("Please fill out Username and Password");
        } else if (this.state.password.length < 6) {
          alert(`Choose a password with more than 6 letters`);
        } else if (response.status === 200) {
          console.log("successful signup");
          alert("You've Successfully signed up.");
          // update App.js state
          this.props.loginUser({
            loggedIn: true,
            username: response.data.username
          });
          this.setState({
            //redirect to login page
            redirectTo: "/"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="loginBox">
          <img src="/asset/images/debuddy.png" className="user" alt="" />
          <h2>Sign Up Free</h2>
          <form>
            <p>Email</p>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Email"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <p>Password</p>
            <input
              className="form-input"
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              name=""
              value="Sign Up"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      );
    }
  }
}

export default SignupForm;
