import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import JobsList from './JobsList';
import SearchBar from '../../components/JobPosts/search_bar';


const API_END_POINT = 'https://jobs.github.com/positions.json';

require('es6-promise').polyfill();

class JobPosting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: {},
      loading: true,
      intervalBeforeRequest: 2000,
      lockRequest: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetchJsonp(`${API_END_POINT}`, this.config)
      .then((response) => response.json())
      .then(function (findResponse) {
        this.setState({ jobs: findResponse.slice(0, 10), loading: false });
      }.bind(this))
      .catch(function (error) {
        console.log('Request failed', error)
      });
  }

  search(searchText) {
    this.setState({ loading: true })
    if (searchText) {
      fetchJsonp(`${API_END_POINT}?search=${searchText}`, this.config)
        .then((response) => response.json())
        .then(function (findResponse) {
          if (findResponse) {

            this.setState({ jobs: findResponse.slice(0, 10), loading: false });
          }
        }.bind(this))
    }
  }

  render() {
    let content;


    if (this.state.loading)
      content = <h2 className="text-center alert alert-primary">Loading ...</h2>;
    else if (this.state.jobs.length >= 1)
      content = <JobsList jobs={this.state.jobs} />;
    else
      content = <h2 className="text-center alert alert-danger">No jobs matching that criteria have been found. Try a different search.</h2>;

    return (
      <div>
        <div>
          <SearchBar callback={this.search.bind(this)} />
          {content}
        </div>
      </div>
    );
  }
}

export default JobPosting;
