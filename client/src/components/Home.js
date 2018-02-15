import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Home extends Component {
  render() {
    return (
        <div id="home">
            <GraphInfo info="Description" graphName="NewsAlgo" graphType="Line"/>
            {/* <GraphInfo info="AYY LMAO" graphName="HEHEHE" graphType="Polar"/>
            <GraphInfo info="AYY LMAO" graphName="HEHEHE" graphType="Doughnut"/> */}
        </div>
    );
  }
}

export default Home;
