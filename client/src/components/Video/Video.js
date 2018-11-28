import React, { Component } from "react";
import axios from "axios";

import "./Video.css";

class Video extends Component {
  state = {
    result: []
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchYoutube();
  }

  searchYoutube = () => {
    axios
      .get(
        " https://www.googleapis.com/youtube/v3/search?q=web%20development&maxResults=8&part=snippet&key=AIzaSyBhnZV06WMyj1rsGqLrtgG5EuXDr4SIvu4 "
      )
      .then(res => {
        let result = res.data.items.map(
          video => "https://www.youtube.com/embed/" + video.id.videoId
        );
        this.setState({ result });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.result.map((link, i) => {
          let frame = (
            <div>
              <iframe
                className="video"
                title="youtube"
                key={link}
                width="200"
                height="200"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}

        {this.frame}
      </div>
    );
  }
}

export default Video;
