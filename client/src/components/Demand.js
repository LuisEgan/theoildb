import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const DemandDescription = <div> <p> Units: Millions of Barrels per Day | Frequency: Quarterly | Source: OPEC </p></div>;

class Demand extends Component {
  render() {
    return (
        <div id="demand">
            {/* <h1>Demand</h1> */}
            <GraphInfo info="Worldwide Demand" graphName="Demand" graphType="Line" description={DemandDescription}/>
        </div>
    );
  }
}

export default Demand;
