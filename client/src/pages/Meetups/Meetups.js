import React, { Component } from 'react';
import axios from 'axios';

//Api key
const API_KEY = process.env.REACT_APP_API_KEY



class Meetups extends Component {
  constructor() {
    super()
    //state
    this.state = {
      meetups: [],
    }
  }


  componentWillMount() {
    this.getMeetUps();

  }

  getMeetUps() {
    //meetup api
    axios.get('https://api.meetup.com/find/upcoming_events?topic_category=34&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=' + API_KEY)
      .then(response => {
        //pull event data
        this.setState({ meetups: response.data.events }, () => {
          console.log(this.state)
        })

      })
  }

  render() {
    // console.log(this.state)
    //iterate through the array
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return (
        //display...
        <div>
          <h1>{meetup.name}</h1>
          <li>Date: {meetup.local_date}</li>
          <li>Location: {meetup.group.localized_location}</li>
          <li>Link: {meetup.link}</li>
          <li>Id: {meetup.id}</li>
          <hr></hr>
        </div>
      )
    })
    return (
      // render to div
      <h1>
        {meetupItems}
      </h1>
    )
  }
}

export default Meetups;

