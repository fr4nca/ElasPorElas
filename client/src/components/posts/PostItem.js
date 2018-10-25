import React, { Component } from "react";
import axios from "axios";
import Coments from "./Coments";

class PostItem extends Component {
  state = {
    mulher: {},
    toggle: false
  };

  async componentWillMount() {
    const { cpf } = this.props;
    const data = await axios.get(`http://localhost:5000/mulher/${cpf}`);
    this.setState({
      mulher: data.data
    });
  }
  onToggle = () => {
    this.setState({
      ...this.state,
      toggle: !this.state.toggle
    });
  };
  render() {
    const { post } = this.props;
    const { nome } = this.state.mulher;
    let nomeAutor;
    if (post.anonimo.data) {
      if (post.anonimo.data[0] === 1) {
        nomeAutor = "Anônimo";
      } else {
        nomeAutor = nome;
      }
    } else {
      if (post.anonimo === 1) {
        nomeAutor = "Anônimo";
      } else {
        nomeAutor = nome;
      }
    }

    return (
      <div className="card z-depth-2">
        <div className="card-content">
          <div className="card-title">{nomeAutor}</div>
          <p> {post.descricao}</p>
          <button
            style={{ backgroundColor: "#662D91" }}
            onClick={this.onToggle}
            className="btn btn-small btn-floating "
          >
            <i className="fa fa-comments" />
          </button>
        </div>

        {this.state.toggle ? (
          <Coments cpf={this.props.cpf} dta={post.dta_post} />
        ) : null}
      </div>
    );
  }
}

export default PostItem;
