import axios from 'axios';

const KEY = 'AIzaSyA1z9uVspOzXWHGZZe3g_vYuNsO3LZqZV8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});