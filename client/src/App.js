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
          <Route exact path="/favourite" component={Favourite} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
