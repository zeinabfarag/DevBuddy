import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Articles from './pages/Articles';
import FrontPage from './pages/FrontPage';
import JobPosting from './pages/JobPosting';
import Meetups from './pages/Meetups';
import NoMatch from './pages/NoMatch';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };
  }

  render() {
    return (
      <div className="App">
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user */}
        {this.state.loggedIn && <h1>Welcome, {this.state.username}!</h1>}
        {/*Routes to different pages */}
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/jobposting" component={JobPosting} />
          <Route exact path="/meetups" component={Meetups} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
