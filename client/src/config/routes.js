import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import News from "../components/News";
import Curve from "../components/Curve";
import Production from "../components/Production";
import Demand from "../components/Demand";
import Margins from "../components/Margins";
import Financials from "../components/Financials";
import Transportation from "../components/Transportation";
import About from "../components/About";

const publicPath = "/";

export const routeCodes = {
  HOME: publicPath,
  LOGIN: `${publicPath}login`,
  NEWS: `${publicPath}news`,
  CURVE: `${publicPath}curve`,
  PRODUCTION: `${publicPath}production`,
  DEMAND: `${publicPath}demand`,
  MARGINS: `${publicPath}margins`,
  FINANCIALS: `${publicPath}financials`,
  TRANSPORTATION: `${publicPath}transportation`,
  ABOUT: `${publicPath}about`
};

export default props => {
  return (
    <Switch>
      <Route path={`${publicPath}news`} component={News} />
      <Route path={`${publicPath}curve`} component={Curve} />
      <Route path={`${publicPath}demand`} component={Demand} />
      <Route path={`${publicPath}production`} component={Production} />
      <Route path={`${publicPath}margins`} component={Margins} />
      <Route path={`${publicPath}financials`} component={Financials} />
      <Route path={`${publicPath}transportation`} component={Transportation} />
      <Route path={`${publicPath}about`} component={About} />
      <Route exact path={publicPath} component={Home} />
    </Switch>
  );
};
