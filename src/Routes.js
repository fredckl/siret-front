
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  )
}

export default Routes
