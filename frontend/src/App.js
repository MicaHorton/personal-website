import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Single from './components/single.js'
import Contact from './components/contact.js';
import Login from './components/login.js';

const Default = () => (
  <div>
      <Navbar />
      <Route path='/' exact component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/single/:id' exact component={Single} />
      <Route path='/contact' exact component={Contact} />
    </div>
);


const Admin = () => (
  <div>
    <Route path='/' component={Login} />
  </div>
);

function App() {
  return (
  <Router>

    <Switch>
      <Route exact path='/admin' component={Admin}/>
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