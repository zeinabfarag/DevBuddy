import React, { Component } from "react";
import axios from "axios";

class Questions extends Component {
  state = {
    result: [],
    search: ""
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
        <form onSubmit={this.handleSubmit}>
          <p> Search Stack Overflow for any Questions You May Have!</p>
          <input type="text" name="question" />
          <input type="submit" />
        </form>
        {this.state.result.map((result, i) => {
          let title = (
            <ul>
              <li>
                <a key={result.title} href={result.link}>
                  {result.title}
                </a>
              </li>
            </ul>
          );
          return title;
        })}
      </div>
    );
  }
}
export default Questions;
