import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexRedirect } from 'dva/router'
import IndexPage from './routes/IndexPage'
import AuthorsPage from './routes/AuthorsPage'
import WorksPage from './routes/WorksPage'
import BeaconsPage from './routes/BeaconsPage'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path='/' component={IndexPage}>
        <IndexRedirect to="authors" />
        <Route path='authors' component={AuthorsPage} />
        <Route path='works' component={WorksPage} />
        <Route path='beacons' component={BeaconsPage} />
      </Route>
    </Router>
  )
}
