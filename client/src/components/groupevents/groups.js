import axios from "axios";
import React, { Component } from "react";
import "./eventstyle.css";
import { Redirect } from "react-router";

// //the api key
// const API_KEY = process.env.REACT_APP_API_KEY;

class Groups extends Component {
  state = {
    result: []
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEvents();

  }

  searchEvents = () => {
    axios
      .get(
        // "https://www.eventbrite.com/oauth/authorize?events?response_type=code&client_id=Q5ZAGKAYOBVO2NA6DZ"
        // "https://www.eventbriteapi.com/v3/events/search/?token=YQEUBQ2KXBYZCTTTMHFICTVVCZLAL5TZVOOM5NLVJCYBN7ZMVT&organizer.id=8231868522&expand=venue&client_id=Q5ZAGKAYOBVO2NA6DZ"
        // "https://www.eventbriteapi.com/v3/oauth/authorize?events/search?token=Q5ZAGKAYOBVO2NA6DZ"
        // 'https://www.eventbriteapi.com/v3/events/search/?q=tech&sort_by=&categories=101&token=YQEUBQ2KXBYZCTTTMHFICTVVCZLAL5TZVOOM5NLVJCYBN7ZMVT'

        'https://www.eventbriteapi.com/v3/events/search/&client_id=R5ZWGGH5QB65L3MAW62S'
        ,

      )
      .then(res => {
        console.log(res.data)
        this.setState({ results: res.data }, () => {
          //       // console.log(this.state)
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    // return (
    //   <div>
    //     {this.state.result.map((link, i) => {
    //       let frame = (
    //         <div>
    //           <iframe
    //             className="video"
    //             title="youtube"
    //             key={link}
    //             width="200"
    //             height="200"
    //             src={link}
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //             allowFullScreen
    //           />
    //         </div>
    // );
    return ("hello")
    //     })}

    //     {this.frame}
    //   </div>
    // );


  }
}
export default Groups;
