import React from 'react';
import './videodetail.css'

const VideoDetail = (props) => {
  console.log(props.selectedVideo.id.videoId);

  return (
    <div className="video-detail ui">
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}?autoplay=1`}  
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      <div>

      </div>
    </div>
  )
}

export default VideoDetail;