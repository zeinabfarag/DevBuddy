import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class Login extends Component {
  render() {
    return <LoginForm loginUser={this.props.loginUser} />;
  }
}

export default Login;
