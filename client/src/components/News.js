import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class News extends Component {
  render() {
    return (
        <div id="news">
            <h1>News</h1>
            <GraphInfo info="Description" graphName="NewsAlgo" graphType="Line"/>
        </div>
    );
  }
}

export default News;
