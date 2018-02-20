import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const DemandDescription = <p> Units: Millions of Barrels per Day | Frequency: Quarterly | Source: OPEC </p>;
const ProductionDescription = <p> Units: Barrels per Day | Frequency: Monthly | Source: OPEC &amp; IEA </p>;
const StocksDescription = <p> Units: Millions of Barrels | Frequency: Monthly | Source: OPEC </p>;


class SupplyDemand extends Component {
  render() {
    return (
        <div id="demand">
            {/* <h1>Demand</h1> */}
            <GraphInfo info="Worldwide Demand" graphName="Demand" graphType="Line" description={DemandDescription}/>
            <GraphInfo info="OECD Stocks" graphName="Stocks" graphType="Line" description={StocksDescription}/>
            <GraphInfo info="Oil Production in Selected Countries" graphName="Production" graphType="Line" description={ProductionDescription}/>
        </div>
    );
  }
}

export default SupplyDemand;
