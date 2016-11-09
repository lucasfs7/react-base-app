import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

const req = require.context('../scenes', true, /\.js$/)

const scenes =  req.keys().map((key) => ({
  fileName: key,
  module: req(key)
}))

const getRouteProps = ({ fileName, module }) => {
  if (module.default && typeof(module.default) === 'function') {
    return {
      path: fileName.replace(/\.js/, '').replace('./', '/'),
      component: module.default
    }
  }
  return module
}

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
