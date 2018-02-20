import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const CurveDescription = <p> Units: Contract Price in US$ | Contracts Frequency: Monthly | Data Frequency: Daily | Source: CME </p>;

class Curve extends Component {
  render() {
    return (
        <div id="curve">
           {/* <h1>Curve</h1> */} 
            <GraphInfo info="WTI Contracts Curve" graphName="Curve" graphType="Line" description={CurveDescription}/>
        </div>
    );
  }
}

export default Curve;
