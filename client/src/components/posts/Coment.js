import React, { Component } from "react";
import axios from "axios";

class Coment extends Component {
  state = { mulher: "" };
  async componentWillMount() {
    const data = await axios.get(
      `http://localhost:5000/mulher/${this.props.comentario.mulher_CPF}`
    );
    this.setState({
      mulher: data.data.nome
    });
  }

  render() {
    return (
      <li className="collection-item" style={{ fontSize: 16 + "px" }}>
        <small className="right">{this.state.mulher}</small>
        {this.props.comentario.texto_comentario}
      </li>
    );
  }
}

export default Coment;
