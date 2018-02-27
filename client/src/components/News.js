import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const NewsDescription = <div id="NewsText">
<p> Oil Price - Units: US$ per Barrel (CL1) | Frequency: Daily | Source: CME </p>
<p> NewsAlgorithm - Units: % of Positive News | Frequency: Daily | Source: TheOilDB </p>
<p> For information about how the algorithm is calculated, check the "About" section </p></div>;

class News extends Component {
  render() {
    return (
        <div id="news">
            <h1>News Algorithm</h1>
            <GraphBlock Searchable="Time" info="Oil Price vs NewsAlgorithm" graphName="NewsAlgo" graphType="Line" description={NewsDescription}/>
        </div>
    );
  }
}

export default News;
