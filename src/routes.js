import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)

export default Routes
