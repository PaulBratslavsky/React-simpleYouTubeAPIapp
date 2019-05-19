import React, { Component } from 'react'
import VideoItem from '../VideoItem';

class VideoList extends Component {

  render() {
    const videos = this.props.videos;
    const renderedList = videos.map( (video, index) => <VideoItem key={index} video={video} onVideoSelect={this.props.onVideoSelect}/> );

    return (
      <div className="ui segment">
        <h3>{`Showing ${videos.length} Videos`}</h3>
        { renderedList }
      </div>
    )

  }

}

export default VideoList;
