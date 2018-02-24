import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const CurveDescription = <p> Units: Contract Price in US$ | Contracts Frequency: Monthly | Data Frequency: Daily | Source: CME </p>;

class Curve extends Component {
  render() {
    return (
        <div id="curve">
           {/* <h1>Curve</h1> */} 
            <GraphBlock Searchable="No" info="WTI Contracts Curve" graphName="Curve" graphType="Line" description={CurveDescription}/>
        </div>
    );
  }
}

export default Curve;
