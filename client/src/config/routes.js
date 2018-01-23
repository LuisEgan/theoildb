import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  LOGIN: `${ publicPath }login`,
};

export default props => {
  return (
    <Switch>
      <Route exact path={publicPath} component={Home} />
    </Switch>
  );

};
