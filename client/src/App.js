import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Header from "./components/common/Header";
import LoginForm from "./components/user/LoginForm";
import Posts from "./components/posts/Posts";
import PrivateRoute from "./components/common/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Route exact path="/" component={LoginForm} />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/posts" component={Posts} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
