import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Articles from './pages/Articles';
import FrontPage from './pages/FrontPage';
import JobPosting from './pages/JobPosting';
import Meetups from './pages/Meetups';
import NoMatch from './pages/NoMatch';
import Resources from './pages/Resources';
import Login from './pages/Login';

import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/jobposting" component={JobPosting} />
        <Route exact path="/meetups" component={Meetups} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
