import React, { Component } from 'react';


//search bar logic



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Find your job...",
      intervalBeforeRequest: 1000,
      lockRequest: false
    }
  }
  render() {
    return (
      <div className='navbar navbar-dark bg-dark box-shadow'>
        <div className='row'>
          <div className="col-4 navbar-brand">
            <span>Search</span>
          </div>
          <form className='form-inline my-2 my-lg-0'>
            <input type='text' className='form-control mr-sm-2' onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder} />
            <span className='input-group-btn'>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleOnClick.bind(this)}>Go</button>
            </span>
          </form>
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    if (!this.state.lockRequest) {
      this.setState({ lockRequest: true });
      setTimeout(function () { this.search() }.bind(this), this.state.intervalBeforeRequest)
    }
  }

  handleOnClick(event) {
    this.search();
  }

  search() {
    this.props.callback(this.state.searchText)
    this.setState({ lockRequest: false })
  }

}

export default SearchBar;