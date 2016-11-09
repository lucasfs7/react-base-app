import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import isFunction from 'lodash/isFunction'

const req = require.context('scenes', true, /\.js$/)

const scenes =  req.keys()
  .filter((key) => !/\.test.js/.test(key))
  .map((key) => ({
  fileName: key,
  module: req(key)
}))

const getRouteProps = ({ fileName, module }) => (
  isFunction(module.default) ? {
    path: fileName.replace(/\.js/, '').replace('./', '/'),
    component: module.default
  } : module
)

const routes = (
  <Router history={ browserHistory }>
    { scenes
      .map(getRouteProps)
      .map((route, index) => (
      <Route key={ index } { ...route } />
    )) }
  </Router>
)

export default routes
