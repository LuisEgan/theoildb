import React, { Component } from 'react';
import GraphInfo from './GraphInfo';

const WDDescription = <div> <p> Units: Oil + Misc Drills | Frequency: Weekly | Source: BHGE </p></div>;
const MDDescription = <div> <p> Units: Oil + Misc Drills | Frequency: Monthly | Source: BHGE </p></div>;
const ProductionDescription = <div> <p> Units: Barrels per Day | Frequency: Monthly | Source: OPEC &amp; IEA </p></div>;
const StocksDescription = <div> <p> Units: Millions of Barrels | Frequency: Monthly | Source: OPEC </p></div>;


class Production extends Component {
  render() {
    return (
        <div id="production">
            {/* <h1>Production</h1> */}
            <GraphInfo info="Drills in US and Canada" graphName="WeeklyDrills" graphType="Line" description={WDDescription}/>
            <GraphInfo info="Drills in Selected Countries" graphName="MonthlyDrills" graphType="Line" description={MDDescription}/>
            <GraphInfo info="Oil Production in Selected Countries" graphName="Production" graphType="Line" description={ProductionDescription}/>
            <GraphInfo info="OECD Stocks" graphName="Stocks" graphType="Line" description={StocksDescription}/>
        </div>
    );
  }
}

export default Production;
