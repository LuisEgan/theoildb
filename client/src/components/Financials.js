import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const OVXDescription = <div> <p> Units: Index Points | Frequency: Daily | Source: CBOE </p></div>;
const SectorDescription = <div> <p> Units: Index Points | Frequency: Daily | Source: S&amp;P Indices </p></div>;
const PositionsDescription = <div> <p> Units: Total Positions | Frequency: Weekly | Source: CFTC </p></div>;

class Financials extends Component {
  render() {
    return (
        <div id="financials">
            {/* <h1>Financials</h1> */}
            <GraphInfo info="Oil Volatility Index" graphName="OVX" graphType="Line" description={OVXDescription}/>
            <GraphInfo info="Standard and Poors Energy Sector Index" graphName="Sector" graphType="Line" description={SectorDescription}/>
            <GraphInfo info="CFTC Positions" graphName="Positions" graphType="Line" description={PositionsDescription}/>
        </div>
    );
  }
}

export default Financials;
