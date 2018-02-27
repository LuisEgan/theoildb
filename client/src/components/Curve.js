import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const CurveDescription = <div id="CurveText">
<p> Units: Contract Price in US$ | Selected month shows the data of the first trading day of that month | Source: CME </p>
<p> For visualization purposes we recommend selecting the date with the lowest values first (Green) </p>
<p> For a better understanding of this chart, check the "About" section </p> </div>;

class Curve extends Component {
  render() {
    return (
        <div id="curve">
          <h1>Oil Contracts Curve</h1> 
          <GraphBlock Searchable="FCurve" info="WTI Contracts Curve" graphName="Curve" graphType="Line" description={CurveDescription}/>
        </div>
    );
  }
}

export default Curve;
