import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router' 
import { createHistory } from 'history'

import App from './components/App'
import PageNotFound from './components/PageNotFound'
import StorePicker from './components/StorePicker'


/*
  Routes
*/
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={PageNotFound} />
  </Router>
)


ReactDOM.render(routes, document.getElementById('main'))
