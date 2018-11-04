import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch';
import FrontPage from './pages/FrontPage';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
