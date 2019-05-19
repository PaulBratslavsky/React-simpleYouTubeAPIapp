import React from 'react';
import './videoitem.css';

const VideoItem = (props) => {
  const video = props.video;
  return (
    <div onClick={ () => { props.onVideoSelect(video) } } className="video-item ui segment">
      <img className="ui fluid image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoItem;
