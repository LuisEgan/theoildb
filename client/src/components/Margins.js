import React, { Component } from 'react';
import GraphBlock from './GraphBlock';

const MarginsDescription = <div id="Descript">
<p> Units: Refinery Margins in US$ per Barrel | Frequency: Monthly | Source: OPEC </p>
<p> Some baskets may not spawn the entire timeframe because they were replaced by others </p> </div>;

class Margins extends Component {
  render() {
    return (
        <div id="margins">
            <h1>Margins</h1>
            <GraphBlock Searchable="Arg" info="Refinery Margins" graphName="Margins" graphType="Line" description={MarginsDescription}/>
        </div>
    );
  }
}

export default Margins;
