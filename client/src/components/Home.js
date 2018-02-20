import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const NewsDescription = <div> <p> Oil Price - Units: US$ per Barrel (CL1) | Frequency: Daily | Source: CME </p>
<p> NewsAlgorithm - Units: % of Positive News | Frequency: Daily | Source: TheOilDB </p>
<p> For information about how the algorithm is calculated check the "About" section </p></div>;

class Home extends Component {
  render() {
    return (
        <div id="home">
            <GraphInfo info="CL1 vs % of Positive News" graphName="NewsAlgo" graphType="Line" description={NewsDescription}/>
        </div>
    );
  }
}

export default Home;
