import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import News from '../components/News';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  LOGIN: `${ publicPath }login`,
  NEWS: `${ publicPath }news`,
};

export default props => {
  return (
    <Switch>
      <Route exact path={`${publicPath}news`} component={News} />
      <Route exact path={publicPath} component={Home} />
    </Switch>
  );

};
