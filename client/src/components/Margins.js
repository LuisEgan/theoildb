import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Margins extends Component {
  render() {
    return (
        <div id="margins">
            <h1>Margins</h1>
            <GraphInfo info="Description" graphName="Margins" graphType="Line"/>
        </div>
    );
  }
}

export default Margins;
