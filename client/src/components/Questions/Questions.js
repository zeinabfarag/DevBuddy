import React, { Component } from "react";
import axios from "axios";
import "./Questions.css";

class Questions extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount = () => {
    console.log(this.props.query);
    if (this.props.query !== undefined) {
      this.searchQuestions(this.props.query);
    }
  };

  // When this component mounts, search for the movie "The Matrix"

  searchQuestions = question => {
    axios
      .get(
        "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=" +
          question +
          "&site=stackoverflow"
      )

      .then(res => {
        let result = res.data.items;
        this.setState({ result });
        console.log(this.state.result);
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchQuestions(event.target.question.value);
  };

  render() {
    return (
      <div>
        {this.props.query === undefined && (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input id="query" type="text" name="question" />
              <input
                id="submit"
                type="submit"
                className="btn btn-outline-secondary"
              />
            </form>
            <p id="description">
              <span id="firstword"> Stack Overflow</span> is a platform where
              students and professionals post queries and answer questions about
              programming. It is a great tool to use when solving a specific
              coding issue. Try it out!
            </p>
          </div>
        )}
        {this.state.result.map((result, i) => {
          let title = (
            <p>
              <a key={result.title} href={result.link}>
                {result.title}
              </a>
            </p>
          );
          return title;
        })}
      </div>
    );
  }
}
export default Questions;
