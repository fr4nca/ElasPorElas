import React, { Component } from "react";
import Coments from "./Coments";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deletePost } from "../../actions/postsActions";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

class PostItem extends Component {
  state = {
    mulher: {},
    toggle: false
  };

  onToggle = () => {
    this.setState({
      ...this.state,
      toggle: !this.state.toggle
    });
  };

  onDeletePost = () => {
    const { mulher_CPF, dta_post } = this.props.post;
    this.props.deletePost({ dta_post, mulher_CPF });
  };

  renderBotao = () => {
    const { post } = this.props;
    const { auth } = this.props;
    let botao;

    if (auth.user) {
      if (post.mulher_CPF === auth.user.CPF) {
        botao = (
          <button
            onClick={this.onDeletePost}
            style={{ backgroundColor: "#662D91", marginRight: 45 + "px" }}
            className="btn btn-small btn-floating halfway-fab waves-effect waves-light"
          >
            <i className="fa fa-trash" />
          </button>
        );
      } else {
        botao = null;
      }
    }

    return botao;
  };

  render() {
    const { post } = this.props;

    let nomeAutor;

    if (post.anonimo.data) {
      if (post.anonimo.data[0] === 1) {
        nomeAutor = "Anônimo";
      } else {
        nomeAutor = post.nome;
      }
    } else {
      if (post.anonimo === 1) {
        nomeAutor = "Anônimo";
      } else {
        nomeAutor = post.nome;
      }
    }

    return (
      <div style={{ marginBottom: 30 + "px" }} className="card z-depth-3">
        <div className="card-content">
          <div style={{ fontSize: 34 + "px" }} className="card-title">
            <strong> {nomeAutor}</strong>
          </div>
          <p style={{ fontSize: 24 + "px" }}>{this.props.post.descricao}</p>
          {this.renderBotao()}
          <button
            style={{ backgroundColor: "#662D91" }}
            onClick={this.onToggle}
            className="btn btn-small btn-floating halfway-fab  waves-effect waves-light"
          >
            <i className="fa fa-comments " />
          </button>
        </div>

        {this.state.toggle ? (
          <Coments cpf={this.props.post.mulher_CPF} dta={post.dta_post} />
        ) : null}
      </div>
    );
  }
}

PostItem.propTypes = {
  posts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
