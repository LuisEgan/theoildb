import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Demand extends Component {
  render() {
    return (
        <div id="demand">
            <h1>Demand</h1>
            <GraphInfo info="Description" graphName="Demand" graphType="Line"/>
        </div>
    );
  }
}

export default Demand;
