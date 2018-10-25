import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Header from "./components/common/Header";
import LoginForm from "./components/user/LoginForm";
import Posts from "./components/posts/Posts";
import PrivateRoute from "./components/common/PrivateRoute";
import RegisterForm from "./components/user/RegisterForm";
import Historico from "./components/ajuda/Historico";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Route exact path="/" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Switch>
                <PrivateRoute exact path="/posts" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/historico" component={Historico} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
