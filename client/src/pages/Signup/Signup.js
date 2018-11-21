import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm';

class Signup extends Component {
  render() {
    return <SignupForm loginUser={this.props.loginUser} />;
  }
}

export default Signup;
