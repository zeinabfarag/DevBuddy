import React, { Component } from "react";
import axios from "axios";

class Jobs extends Component {
  state = {
    result: []
  };

  componentDidMount() {
    this.searchJobs();
  }

  searchJobs = () => {
    axios
      .get("https://jobs.search.gov/jobs/search.json?query=nursing+jobs")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Jobs</h1>
      </div>
    );
  }
}

export default Jobs;
