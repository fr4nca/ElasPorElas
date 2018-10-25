import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addPost } from "../../actions/postsActions";
import { withRouter } from "react-router-dom";

class PostForm extends Component {
  state = {
    toggle: false,
    descricao: "",
    anonimo: false
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  onChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const cpf = this.props.auth.user.CPF;
    const { descricao } = this.state;
    const anonimo = this.state.anonimo ? 1 : 0;

    const post = {
      dta_post: moment()
        .parseZone()
        .format("YYYY-MM-DD HH:mm:ss"),
      mulher_CPF: cpf,
      descricao,
      anonimo
    };

    this.props.addPost(post);
  };

  form = () => {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-field">
          <textarea
            value={this.state.descricao}
            onChange={this.onChange}
            className="materialize-textarea"
            id="post"
            name="descricao"
            required
          />
          <label style={{ fontSize: 20 + "px" }} htmlFor="post">
            Digite seu texto..
          </label>
        </div>
        <div className="input-field">
          <p>
            <label>
              <input
                checked={this.state.anonimo}
                name="anonimo"
                type="checkbox"
                className="checkbox-orange"
                onChange={this.onChange}
              />
              <span>Anônimo</span>
            </label>
          </p>
        </div>
        <input
          style={{ backgroundColor: "#662D91" }}
          className="btn btn-floating btn-small"
          type="submit"
          value="+"
        />
      </form>
    );
  };

  render() {
    return (
      <div>
        <button
          className="btn-floating btn-large waves-effect waves-light right"
          style={{ backgroundColor: "#662D91" }}
          onClick={this.toggle}
        >
          <i
            className={this.state.toggle ? "fa fa-times" : "fa fa-pen-fancy"}
          />
        </button>
        {this.state.toggle ? this.form() : null}
      </div>
    );
  }
}

PostForm.propTypes = {
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});

export default withRouter(
  connect(
    mapStateToProps,
    { addPost }
  )(PostForm)
);
