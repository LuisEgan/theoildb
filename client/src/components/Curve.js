import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Curve extends Component {
  render() {
    return (
        <div id="curve">
            <h1>Curve</h1>
            <GraphInfo info="Description" graphName="Curve" graphType="Line"/>
        </div>
    );
  }
}

export default Curve;
