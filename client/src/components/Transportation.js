import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const RatesDescription = <p> Units: US$ per Barrel | Frequency: Monthly | Source: OPEC </p>;

class Transportation extends Component {
  render() {
    return (
        <div id="transportation">
            <h1>Transportation</h1>
            <GraphBlock Searchable="Arg" info="Freight Rates" graphName="Rates" graphType="Line" description={RatesDescription}/>
        </div>
    );
  }
}

export default Transportation;
