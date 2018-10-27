import React, { Component } from "react";
import Coments from "./Coments";

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
          <button
            style={{ backgroundColor: "#662D91" }}
            onClick={this.onToggle}
            className="btn btn-small btn-floating halfway-fab"
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

export default PostItem;
