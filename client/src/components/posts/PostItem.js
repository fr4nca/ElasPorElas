import React, { Component } from "react";
import axios from "axios";

class PostItem extends Component {
  state = {
    mulher: {}
  };

  async componentWillMount() {
    const { cpf } = this.props;

    const data = await axios.get(`http://localhost:5000/mulher/${cpf}`);
    this.setState({
      mulher: data.data
    });
  }

  render() {
    const { post } = this.props;
    const { nome } = this.state.mulher;
    let nomeAutor;
    if (post.anonimo.data[0] === 1) {
      nomeAutor = "Anônimo";
    } else {
      nomeAutor = nome;
    }
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">{nomeAutor}</div>
          <p> {post.descricao}</p>
        </div>
      </div>
    );
  }
}

export default PostItem;
