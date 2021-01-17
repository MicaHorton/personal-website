import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/login.js';
import Console from './components/console.js';
import Edit from './components/edit.js';
import Add from './components/add.js';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Console} />
                <Route exact path='/edit/:id' component={Edit} />
                <Route exact path='/add' component={Add} />
            </Switch>
        </Router>
  );
}

export default App;

