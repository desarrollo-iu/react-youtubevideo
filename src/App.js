import _ from 'lodash';
import React, { Component } from 'react';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const App = (props) => {
   return (
      <div>
        <SearchBar onSearchTermChange={props.onSearchTermChange} />
        <VideoDetail video={props.video} />
        <VideoList
          onVideoSelect={props.onVideoSelect }
          videos={props.videos} />
      </div>
    );
};

App.propTypes={
    onSearchTermChange: React.PropTypes.func.isRequired,
    onVideoSelect: React.PropTypes.func.isRequired,
    videos:React.PropTypes.array.isRequired
}

export default App;
