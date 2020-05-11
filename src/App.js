import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Single from './components/single.js'


function App() {
  return (
    <Router>

      <Navbar />
      <Route path='/' exact component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/single/:id' exact component={Single} />


    </Router>
  );
}

export default App;

/*
import Tagbar from "./components/tagbar.js";
<Route path='/Projects' component={Tagbar} />
*/