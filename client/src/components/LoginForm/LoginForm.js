import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      error: true,
      errormsg: "",
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
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          this.setState({ error: false });
          // update App.js state
          this.props.loginUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
        this.setState({ error: true });
        this.setState({ errormsg: "Your username or password is incorrect!" });
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="loginBox">
          <img src="/asset/images/debuddy.png" className="user" alt="" />
          <h2>Log In Here</h2>
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
            <button
              className="btn btn-primary col-mr-auto"
              onClick={this.handleSubmit}
              type="submit"
            >
              Login
            </button>
          </form>
          {this.state.error && <div> {this.state.errormsg} </div>}
        </div>
      );
    }
  }
}

export default LoginForm;
