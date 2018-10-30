import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from "./Logo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { getCatalogo } from "../../actions/catalogoActions";

class LoginForm extends Component {
  state = {
    email: "",
    senha: "",
    error: {}
  };

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    this.props.getCatalogo(nextProps.auth.user.CPF);
  }

  onSubmit = async e => {
    e.preventDefault();

    const { email, senha } = this.state;

    const user = {
      email,
      senha
    };
    this.props.loginUser(user, this.props.history);
    this.setState({
      email: "",
      senha: ""
    });
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m10 l4 offset-m1 offset-l4">
          <Logo className="center col" />
          <div
            style={{
              height: 296 + "px",
              fontSize: 40 + "px"
            }}
            className="card z-depth-3"
          >
            <div className="card-content">
              <form onSubmit={this.onSubmit}>
                <div className="input-field">
                  <i className=" fa fa-user-circle prefix" />
                  <input
                    style={{ fontSize: 20 + "px" }}
                    value={this.state.email}
                    name="email"
                    id="email"
                    type="email"
                    className="validate"
                    onChange={this.onChange}
                    required
                  />
                  <label style={{ fontSize: 17 + "px" }} htmlFor="email">
                    Email
                  </label>
                  <span
                    className="helper-text"
                    data-error="Digite um e-mail válido"
                  />
                </div>

                <div className="input-field">
                  <i className="prefix fa fa-key" />
                  <input
                    style={{ fontSize: 20 + "px" }}
                    value={this.state.senha}
                    name="senha"
                    id="senha"
                    type="password"
                    className="validate"
                    onChange={this.onChange}
                    required
                  />
                  <label style={{ fontSize: 17 + "px" }} htmlFor="senha">
                    Senha
                  </label>
                </div>
                {this.state.error ? (
                  <small className="red-text" style={{ fontSize: 15 + "px" }}>
                    {this.state.error.error}
                  </small>
                ) : null}
                <button
                  type="submit"
                  value="Login"
                  style={{ backgroundColor: "#662D91" }}
                  className="right btn-floating btn-large waves-effect waves-light"
                >
                  <i className="fa fa-sign-in-alt" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  catalogo: state.catalogo
});

export default connect(
  mapStateToProps,
  { loginUser, getCatalogo }
)(withRouter(LoginForm));
