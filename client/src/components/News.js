import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const NewsDescription = <div id="Descript">
<p> Right Y Axis - Units: % Change in price | Frequency: Daily/Weekly | Source: CME </p>
<p> Left Y Axis: % of Positive News | Frequency: Daily/Weekly | Source: TheOilDB </p>
<p> For information about how the algorithm is calculated, check the "About" section </p></div>;

class News extends Component {
  render() {
    return (
        <div id="news">
          <h1>News Algorithm</h1>
          <GraphBlock Searchable="Time" info="% Change in price vs % of Positive News" graphName="NewsAlgo" graphType="Line" description={NewsDescription}/>
        </div>
    );
  }
}

export default News;
