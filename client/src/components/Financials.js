import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Financials extends Component {
  render() {
    return (
        <div id="financials">
            <h1>Financials</h1>
            <GraphInfo info="Description" graphName="OVX" graphType="Line"/>
            <GraphInfo info="Description" graphName="Sector" graphType="Line"/>
            <GraphInfo info="Description" graphName="Positions" graphType="Line"/>
        </div>
    );
  }
}

export default Financials;
