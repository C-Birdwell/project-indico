import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../screens'

import NotFoundPage from '../components/NotFoundPage'
import { Header } from '../components/'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
