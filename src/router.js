import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, IndexRedirect  } from 'dva/router';


import Layout from './routes/layout';
import Dashbord from './routes/dashbord';
import Roles from './routes/roles';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} >
        <IndexRedirect to="dashbord" />
        <Route path='dashbord' component={Dashbord} />
        <Route path='roles' component={Roles} />
      </Route>
    </Router>
  );
};
