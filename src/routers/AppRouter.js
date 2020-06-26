import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from '../components'
import { Dashboard, NotFound } from '../screens'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Dashboard} exact={true} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
