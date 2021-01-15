import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Blog from "./components/blog.js";
import Single from './components/single.js';
import Contact from './components/contact.js';

function App() {
  return (
  <Router>
    <Navbar exact path='/' />
    <Route exact path='/' component={About} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/blog' component={Blog} />
    <Route exact path='/single/:id' component={Single} />
    <Route exact path='/contact' component={Contact} />
  </Router>
  );
}

export default App;

