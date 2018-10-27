import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { getCatalogo } from "../../actions/catalogoActions";

class Header extends Component {
  state = {
    route: ""
  };

  componentWillMount() {
    if (this.props.auth.user.CPF)
      this.props.getCatalogo(this.props.auth.user.CPF);
  }

  onLogoutClick = () => {
    this.props.logoutUser();
  };

  render() {
    const { isLoggedIn } = this.props.auth;

    const authLinks = (
      <ul id="nav-mobile" className="right">
        <li>
          <Link style={{ fontSize: 17 + "px" }} to="/voluntarias">
            Voluntarias
          </Link>
        </li>
        {this.props.catalogo.voluntaria ? (
          <li>
            <Link style={{ fontSize: 17 + "px" }} to="/solicitacoes">
              Solicitações
            </Link>
          </li>
        ) : null}
        <li>
          <Link style={{ fontSize: 17 + "px" }} to="/historico">
            Ajuda
          </Link>
        </li>
        <li>
          <a
            style={{ fontSize: 17 + "px" }}
            href="/"
            onClick={this.onLogoutClick}
          >
            Sair
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" className="right">
        <li>
          {this.props.location.pathname === "/register" ? (
            <Link style={{ fontSize: 17 + "px" }} to="/">
              Login
            </Link>
          ) : (
            <Link style={{ fontSize: 17 + "px" }} to="/register">
              Registrar
            </Link>
          )}
        </li>
      </ul>
    );

    return (
      <div>
        <nav style={{ backgroundColor: "#662D91" }}>
          <div className="navbar-fixed z-depth-3">
            <div className="nav-wrapper container">
              <Link to="/posts" className="brand-logo left hide-on-med-and-up">
                <img
                  style={{ marginTop: 4 + "px" }}
                  src="logo.png"
                  width="39,2706468"
                  height="48,3267708"
                  alt="logo"
                />
              </Link>
              <Link to="/posts" className="brand-logo hide-on-med-and-down">
                Elas por elas
              </Link>
              {isLoggedIn ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  catalogo: state.catalogo
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, getCatalogo }
  )(Header)
);
