import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import NoMatch from './pages/NoMatch';
import Inventory from './pages/Inventory/Inventory';
import AddInventory from './pages/Inventory/AddInventory/AddInventory';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Inventory} />
        <PrivateRoute exact path='/add-inventory' component={AddInventory} />

        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
