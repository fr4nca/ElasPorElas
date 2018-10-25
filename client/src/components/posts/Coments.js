import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getComentarios } from "../../actions/comentsActions";
import axios from "axios";

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

  render() {
    const { comentarios } = this.state;
    let coments;
    if (comentarios.length > 0) {
      coments = (
        <ul className="collection with-header">
          <li class="collection-header">
            <span style={{ fontSize: 18 + "px" }}>Comentários</span>
          </li>
          {comentarios.map(comentario => (
            <li
              key={comentario.dta_comentario}
              className="collection-item"
              style={{ fontSize: 13 + "px" }}
            >
              {comentario.texto_comentario}
            </li>
          ))}
        </ul>
      );
    } else {
      coments = <small>Nenhum comentário</small>;
    }

    return <Fragment>{coments}</Fragment>;
  }
}

Coments.propTypes = {
  comentarios: PropTypes.object.isRequired,
  getComentarios: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comentarios: state.comentarios
});

export default connect(
  mapStateToProps,
  { getComentarios }
)(Coments);
