import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const OVXDescription = <p> Units: Index Points | Frequency: Daily | Source: CBOE </p>;
const SectorDescription = <p> Units: Index Points | Frequency: Daily | Source: S&amp;P Indices </p>;
const PositionsDescription = <p> Units: Total Positions | Frequency: Weekly | Source: CFTC </p>;

class Financials extends Component {
  render() {
    return (
        <div id="financials">
            {/* <h1>Financials</h1> */}
            <GraphBlock Searchable="No" info="Oil Volatility Index" graphName="OVX" graphType="Line" description={OVXDescription}/>
            <GraphBlock Searchable="No" info="Standard and Poors Energy Sector Index" graphName="Sector" graphType="Line" description={SectorDescription}/>
            <GraphBlock Searchable="No" info="CFTC Positions" graphName="Positions" graphType="Line" description={PositionsDescription}/>
        </div>
    );
  }
}

export default Financials;
