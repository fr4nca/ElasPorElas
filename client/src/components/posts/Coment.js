import React, { Component } from "react";

class Coment extends Component {
  render() {
    return (
      <li className="collection-item" style={{ fontSize: 16 + "px" }}>
        <small className="right">{this.props.comentario.nome}</small>
        {this.props.comentario.texto_comentario}
      </li>
    );
  }
}

export default Coment;
