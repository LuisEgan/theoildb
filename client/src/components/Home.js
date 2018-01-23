import React, { Component } from 'react';

import GraphInfo from './GraphInfo';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <GraphInfo /> 
            <GraphInfo /> 
            <GraphInfo /> 
        </div>
    );
  }
}

export default Home;
