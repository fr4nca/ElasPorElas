import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
  };

  render() {
    const { isLoggedIn } = this.props.auth;

    const authLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a onClick={this.onLogoutClick}>Sair</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/register">Registrar</Link>
        </li>
      </ul>
    );

    return (
      <nav style={{ backgroundColor: "#662D91" }}>
        <div className="nav-wrapper container">
          <Link to="/posts" className="brand-logo">
            Elas por elas
          </Link>
          {isLoggedIn ? authLinks : guestLinks}
        </div>
      </nav>
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

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
