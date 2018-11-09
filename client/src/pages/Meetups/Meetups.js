import React, { Component } from 'react';
import axios from 'axios';

//Api key
const API_KEY = process.env.REACT_APP_API_KEY



class Meetups extends Component {
  constructor() {
    super()
    //state
    this.state = {
      groups: [],
    }
  }


  componentWillMount() {
    this.getMeetUps();

  }

  getMeetUps() {
    //meetup api
    axios.get('https://api.meetup.com/find/groups?text=tech&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=' + API_KEY)
      //https://api.meetup.com/find/upcoming_events?topic_category=34&sign=true&photo-host=public&sig_id=255600544&sig=0b1810a39b3fa52e67d05a8da45babe0f49b7eb0&key=
      .then(response => {
        //pull event data
        this.setState({ groups: response.data }, () => {
          console.log(this.state)
        })

      })
  }

  render() {
    //iterate through the array
    const groupItems = this.state.groups.map((group, i) => {

      return (
        //display...
        <div className="container">
          <div className="eventcard">
            <div className="card">
              <h1 className="card-title eventtitle">{group.name}</h1>
              <div className="card-body">
                <ul>
                  <p className="card-text">Members: {group.members}</p>
                  <p className="card-text">Location: {group.localized_location}</p>
                  <a href={group.link} class="card-link">Link</a>
                  {/* <img href={group.key_photo.photo_link} alt="nothing"> */}
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
        {groupItems}
      </h1>
    )
  }
}

export default Meetups;

