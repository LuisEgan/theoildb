import React, { Component } from 'react';

import GraphInfo from './GraphInfo';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <GraphInfo info="AYY LMAO" graphName="HEHEHE" graphType="Line"/>
            <GraphInfo info="AYY LMAO" graphName="HEHEHE" graphType="Polar"/>
        </div>
    );
  }
}

export default Home;
