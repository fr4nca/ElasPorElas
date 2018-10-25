import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Header extends Component {
  state = {
    route: ""
  };

  onLogoutClick = () => {
    this.props.logoutUser();
  };

  render() {
    const { isLoggedIn } = this.props.auth;

    const authLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/" onClick={this.onLogoutClick}>
            Sair
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          {this.props.location.pathname === "/register" ? (
            <Link to="/">Login</Link>
          ) : (
            <Link to="/register">Registrar</Link>
          )}
        </li>
      </ul>
    );

    return (
      <div className="navbar-fixed z-depth-3">
        <nav style={{ backgroundColor: "#662D91" }}>
          <div className="nav-wrapper container ">
            <Link to="/posts" className="brand-logo">
              Elas por elas
            </Link>
            {isLoggedIn ? authLinks : guestLinks}
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
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Header)
);
