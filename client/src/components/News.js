import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const NewsDescription = <div id="Descript">
<p> Right Y Axis - Units: Oil 4-month Returns (%) | Frequency: Daily/Weekly | Source: CME </p>
<p> Left Y Axis - Units: Positive News (%) | Frequency: Daily/Weekly | Source: TheOilDB </p>
<p> For information about how the algorithm is calculated, check the "About" section </p></div>;

class News extends Component {
  render() {
    return (
        <div id="news">
          <h1>News Algorithm</h1>
          <GraphBlock Searchable="Time" info="Oil Returns (%) vs Positive News (%)" graphName="NewsAlgo" graphType="Line" description={NewsDescription}/>
        </div>
    );
  }
}

export default News;
