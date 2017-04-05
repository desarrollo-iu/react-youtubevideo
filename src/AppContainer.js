import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import App from './App';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <App
        onSearchTermChange={videoSearch}
        video={this.state.selectedVideo}
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos} />
    );
  }
}

export default AppContainer;
