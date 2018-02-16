import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

class Production extends Component {
  render() {
    return (
        <div id="production">
            <h1>Production</h1>
            <GraphInfo info="Description" graphName="WeeklyDrills" graphType="Line"/>
            <GraphInfo info="Description" graphName="MonthlyDrills" graphType="Line"/>
            <GraphInfo info="Description" graphName="Production" graphType="Line"/>
            <GraphInfo info="Description" graphName="Stocks" graphType="Line"/>
        </div>
    );
  }
}

export default Production;
