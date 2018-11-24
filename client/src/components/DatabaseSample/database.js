import React, { Component } from "react";

import axios from "axios";

class Sample extends Component {
  componentDidMount() {
    this.sampleFunction();

    console.log("username: ", this.props.username);
  }

  sampleFunction = () => {
    console.log("HELLOOOOOO");
    console.log(this.props.username);
    const sampleObject = {
      firstname: "its",
      lastname: "working"
    };
    axios
      .post(`/user/sample/${this.props.username}`, sampleObject)
      .then(function(response) {
        console.log("success", response);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.sampleFunction}>try me</button>
      </div>
    );
  }
}

export default Sample;
