import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';
import NoMatch from './pages/NoMatch';
import SlabInv from './pages/SlabInv/SlabInv';
import AddSlab from './pages/AddSlab/AddSlab';
import AddInv from './pages/AddInv/AddInv';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SlabInv} />
        <Route exact path='/add-slab' component={AddSlab} />
        <Route exact path='/add-inv' component={AddInv} />

        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
