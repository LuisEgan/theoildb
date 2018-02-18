import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const NewsDescription = <div> <p> Oil Price - Units: US$ per Barrel (CL1) | Frequency: Daily | Source: CME </p>
<p> NewsAlgorithm - Units: % of Positive News | Frequency: Daily | Source: TheOilDB </p>
<p> For information about how the algorithm is calculated check the "About" section </p></div>;

class News extends Component {
  render() {
    return (
        <div id="news">
            {/* <h1>News</h1> */}
            <GraphInfo info="Oil Price vs NewsAlgorithm" graphName="NewsAlgo" graphType="Line" description={NewsDescription}/>
        </div>
    );
  }
}

export default News;
