import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const WDDescription = <p> Units: Oil + Misc Drills | Frequency: Weekly | Source: BHGE </p>;
const MDDescription = <p> Units: Oil + Misc Drills | Frequency: Monthly | Source: BHGE </p>;


class Drills extends Component {
  render() {
    return (
        <div id="production">
            <h1>Drills</h1>
            <GraphBlock Searchable="No" info="Drills in US and Canada" graphName="WeeklyDrills" graphType="Line" description={WDDescription}/>
            <GraphBlock Searchable="Arg" info="Drills in Selected Countries" graphName="MonthlyDrills" graphType="Line" description={MDDescription}/>
        </div>
    );
  }
}

export default Drills;
