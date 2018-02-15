import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Transportation extends Component {
  render() {
    return (
        <div id="transportation">
            <h1>Transportation</h1>
            <GraphInfo info="Description" graphName="Rates" graphType="Line"/>
        </div>
    );
  }
}

export default Transportation;
