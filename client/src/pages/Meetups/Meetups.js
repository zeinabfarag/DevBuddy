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
    axios.get('https://api.meetup.com/find/upcoming_events?topic_category=34&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=' + API_KEY)
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
        <div class="container">
          <div class="eventcard">
            <div class="card">
              <h1 class="card-title eventtitle">{meetup.name}</h1>
              <div class="card-body">
                <ul>
                  <p class="card-text">Date: {meetup.local_date}</p>
                  <p class="card-text">Location: {meetup.group.localized_location}</p>
                  <a href={meetup.link} class="card-link">Link</a>
                </ul>
                <hr></hr>
              </div>
            </div>
          </div>
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

