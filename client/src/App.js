<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FrontPage from "./pages/FrontPage";
import JobPosting from "./pages/JobPosting";
import Meetups from "./pages/Meetups";
import NoMatch from "./pages/NoMatch";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Favourite from "./pages/Favourite";
import JavaScript from "./pages/Languages/Javascript";
import CSS from "./pages/Languages/CSS";
import HTML from "./pages/Languages/HTML";
=======
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Articles from './pages/Articles';
import FrontPage from './pages/FrontPage';
import Meetups from './pages/Meetups';
import NoMatch from './pages/NoMatch';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Favourite from './pages/Favourite';
>>>>>>> 94ea84be61f200c4ed83b8b545ad4d1a86e7d8ea

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
    sessionStorage.setItem("username", JSON.stringify(userObject));
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/articles"
            render={props => (
              <Articles {...props} username={this.state.username} />
            )}
          />
          <Route
            exact
            path="/meetups"
            render={props => (
              <Meetups {...props} username={this.state.username} />
            )}
          />
          <Route
            exact
            path="/resources"
            render={props => (
              <Resources {...props} username={this.state.username} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => <Login {...props} loginUser={this.updateUser} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} loginUser={this.updateUser} />}
          />
          <Route
            exact
            path="/favourite"
            render={props => (
              <Favourite {...props} username={this.state.username} />
            )}
          />

          <Route exact path="/javascript" component={JavaScript} />
          <Route exact path="/html" component={HTML} />

          <Route exact path="/css" component={CSS} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
