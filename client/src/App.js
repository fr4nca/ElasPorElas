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
import Solicitacoes from "./components/ajuda/Solicitacoes";
import Voluntarias from "./components/ajuda/Voluntarias";
import Ajudas from "./components/ajuda/Ajudas";

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
              <Switch>
                <PrivateRoute exact path="/ajudas" component={Ajudas} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/solicitacoes"
                  component={Solicitacoes}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/voluntarias"
                  component={Voluntarias}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
