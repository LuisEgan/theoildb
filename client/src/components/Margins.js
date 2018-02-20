import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const MarginsDescription = <p> Units: Refinery Margins in US$ per Barrel | Frequency: Monthly | Source: OPEC </p>;

class Margins extends Component {
  render() {
    return (
        <div id="margins">
            {/* <h1>Margins</h1> */}
            <GraphInfo info="Refinery Margins" graphName="Margins" graphType="Line" description={MarginsDescription}/>
        </div>
    );
  }
}

export default Margins;
