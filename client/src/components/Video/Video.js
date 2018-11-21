import React, { Component } from "react";
import axios from "axios";

class Video extends Component {
  state = {
    result: [],
    vidLink: React.createRef()
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchYoutube();
  }

  searchYoutube = () => {
    axios
      .get(
        " https://www.googleapis.com/youtube/v3/search?q=web%20development&maxResults=5&part=snippet&key=AIzaSyBhnZV06WMyj1rsGqLrtgG5EuXDr4SIvu4 "
      )
      .then(res => {
        const result = res.data.items.map(
          video => "https://www.youtube.com/embed/" + video.id.videoId
        );
        this.setState({ result });
      })
      .catch(err => console.log(err));
  };

  handleClick = () => {
    console.log(this.state.vidLink);
  };

  render() {
    return (
      <div>
        {this.state.result.map((link, i) => {
          let frame = (
            <div>
              <iframe
                ref={this.vidlink}
                title="youtube"
                key={link}
                width="200"
                height="200"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={this.handleClick}
                type="button"
                className="btn btn-primary"
              >
                Save
              </button>
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
