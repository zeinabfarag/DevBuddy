import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FrontPage from "./pages/FrontPage";
import NoMatch from "./pages/NoMatch";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Favourite from "./pages/Favourite";
import Git from "./pages/Languages/Git";
import HTML from "./pages/Languages/HTML";
import CSS from "./pages/Languages/CSS";
import JavaScript from "./pages/Languages/Javascript";
import jQuery from "./pages/Languages/jQuery";
import Node from "./pages/Languages/Node";
import Express from "./pages/Languages/Express";
import MySQL from "./pages/Languages/MySQL";
import Mongoose from "./pages/Languages/Mongoose";
import ReactJS from "./pages/Languages/React";
import Redux from "./pages/Languages/Redux";
import Angular from "./pages/Languages/Angular";
import Vue from "./pages/Languages/Vue";
import AJAX from "./pages/Languages/AJAX";
import Bootstrap from "./pages/Languages/Bootstrap";
import Comments from "./pages/Comments";

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
    sessionStorage.setItem("username", userObject.username);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
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
              <Articles
                {...props}
                username={this.state.username}
                login={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/resources"
            render={props => (
              <Resources
                {...props}
                username={this.state.username}
                login={this.state.loggedIn}
              />
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
          <Route
            exact
            path="/comments"
            render={props => (
              <Comments {...props} username={this.state.username} />
            )}
          />

          <Route exact path="/css" component={CSS} />
          <Route exact path="/html" component={HTML} />
          <Route exact path="/angular" component={Angular} />
          <Route exact path="/javascript" component={JavaScript} />
          <Route exact path="/mongoose" component={Mongoose} />
          <Route exact path="/vue" component={Vue} />
          <Route exact path="/redux" component={Redux} />
          <Route exact path="/mysql" component={MySQL} />
          <Route exact path="/react" component={ReactJS} />
          <Route exact path="/express" component={Express} />
          <Route exact path="/jquery" component={jQuery} />
          <Route exact path="/git" component={Git} />
          <Route exact path="/node" component={Node} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/ajax" component={AJAX} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
