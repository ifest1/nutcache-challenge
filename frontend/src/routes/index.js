import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';

function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
    </Router>
    
  )
}

export default Routes;
