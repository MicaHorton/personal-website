import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Single from './components/single.js'
import Contact from './components/contact.js';
import Login from './components/login.js';
import Console from './components/console.js';
import Edit from './components/edit.js';

const Default = () => (
  <div>
      <Navbar exact path='/' />
      <Route exact path='/' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/single/:id' component={Single} />
      <Route exact path='/contact' component={Contact} />
    </div>
);


const Admin = () => (
  <div>
    <Switch>
      <Route exact path='/admin' component={Login} />
      <Route exact path='/admin/console' component={Console} />
      <Route path='/admin/console/:id' component={Edit} />

    </Switch>
      
  </div>
);

function App() {
  return (
  <Router>

    <Switch>
      <Route path='/admin' component={Admin}/>
      <Route component={Default}/>
    </Switch>

   </Router>
  );
}

export default App;

/*
import Tagbar from "./components/tagbar.js";
<Route path='/Projects' component={Tagbar} />
*/