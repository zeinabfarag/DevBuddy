import React, { Component } from 'react';
import axios from 'axios';

//Api key
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY



class Meetups extends Component {
  constructor() {
    super()
    this.state = {
      meetups: [],
    }
  }
  componentWillMount() {
    this.getMeetUps();
  }

  getMeetUps() {
    axios.get('https://api.meetup.com/find/events?photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0')
      .then(response => {
        this.setState({ meetups: response.data }, () => {
          console.log(this.state)
        })
      })
  }
  //   //Pulling current events 
  //   componentDidMount() {
  //     fetch('https://api.meetup.com/find/events?photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0',
  //       {
  //         headers: {
  //           'X-Access-Token': API_KEY,
  //           'Content-Type': 'application/json'
  //         },
  //       }).then(response => {
  //         return response.json(); //Json format

  //       }).then(response => console.log(response))
  //       .then(data => {
  //         // Specifiy data later
  //       })
  //   }

  render() {
    return (
      //render to div
      <div className="container">
        <p>  {this.state.response}</p>
      </div>
    )
  }
}

export default Meetups;
