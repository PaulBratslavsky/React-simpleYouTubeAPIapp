import React, { Component } from 'react';
import youtube from '../APIS/youtube';
import Search from '../components/Search';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

onTermSubmit = async (term) => {

  const response = await youtube.get('/search', {
    params: {
      q: term
    }
  });

  // console.log(response.data.items);

  this.setState({
    videos: response.data.items
  })

} 

onVideoSelect = (video) => {
  console.log(video);
  this.setState({
    selectedVideo: video
  })
} 

clearVideoSelect = () => {
  this.setState({
    selectedVideo: null
  });
}



  render() {
    return(
      <div className="ui container" style={{marginTop: '1rem'}}>
        <Search onTermSubmit={this.onTermSubmit} clearVideoSelect={this.clearVideoSelect}/>
        { ( this.state.selectedVideo ) && <VideoDetail selectedVideo={this.state.selectedVideo}/> }
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
  
      </div>
    );
  }
}

export default App;