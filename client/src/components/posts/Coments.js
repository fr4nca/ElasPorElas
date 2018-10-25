import React, { Component, Fragment } from "react";

import axios from "axios";
import ComentForm from "./ComentForm";
import Coment from "./Coment";

class Coments extends Component {
  state = {
    comentarios: [],
    toggle: false
  };

  async componentWillMount() {
    const { cpf } = this.props;
    const comentarios = await axios.post(
      "http://localhost:5000/comentario/getComentarios",
      {
        post_dta: this.props.dta,
        post_mulher_CPF: cpf
      }
    );
    this.setState({
      ...this.state,
      comentarios: comentarios.data
    });
  }

  adicionaComentario = comentario => {
    this.setState({
      ...this.state,
      comentarios: [...this.state.comentarios, comentario]
    });
  };

  render() {
    const { comentarios } = this.state;
    let coments;
    if (comentarios.length > 0) {
      coments = (
        <ul className="collection with-header">
          <li className="collection-header">
            <span style={{ fontSize: 17 + "px" }}>
              <strong> Comentários</strong>
            </span>
          </li>
          {comentarios.map(comentario => {
            return (
              <Coment key={comentario.dta_comentario} comentario={comentario} />
            );
          })}
        </ul>
      );
    } else {
      coments = (
        <ul className="collection with-header">
          <li className="collection-header">
            <span style={{ fontSize: 17 + "px" }}>Comentários</span>
          </li>
          <li className="collection-item" style={{ fontSize: 15 + "px" }}>
            Não há comentários..
          </li>
        </ul>
      );
    }

    return (
      <Fragment>
        {coments}
        <ComentForm
          post_dta={this.props.dta}
          post_mulher_CPF={this.props.cpf}
          adicionaComentario={this.adicionaComentario}
        />
      </Fragment>
    );
  }
}

export default Coments;
