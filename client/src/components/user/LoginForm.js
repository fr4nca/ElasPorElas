import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class LoginForm extends Component {
  state = {
    email: "",
    senha: "",
    error: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        ...this.state,
        email: "",
        senha: "",
        error: nextProps.error
      });
    }
  }

  onSubmit = async e => {
    e.preventDefault();

    const { email, senha } = this.state;

    const user = {
      email,
      senha
    };
    this.props.loginUser(user, this.props.history);
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="row ">
        <div className="col s4 offset-s4">
          <div
            style={{
              height: 296 + "px",
              marginTop: 30 + "%",
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
                    id="emai"
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
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginForm));
