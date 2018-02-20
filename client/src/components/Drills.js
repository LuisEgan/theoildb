import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const WDDescription = <p> Units: Oil + Misc Drills | Frequency: Weekly | Source: BHGE </p>;
const MDDescription = <p> Units: Oil + Misc Drills | Frequency: Monthly | Source: BHGE </p>;


class Drills extends Component {
  render() {
    return (
        <div id="production">
            {/* <h1>Production</h1> */}
            <GraphInfo info="Drills in US and Canada" graphName="WeeklyDrills" graphType="Line" description={WDDescription}/>
            <GraphInfo info="Drills in Selected Countries" graphName="MonthlyDrills" graphType="Line" description={MDDescription}/>
        </div>
    );
  }
}

export default Drills;
