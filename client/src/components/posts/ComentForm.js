import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addComentario } from "../../actions/comentsActions";
import moment from "moment";

class ComentForm extends Component {
  state = {
    texto: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const comentario = {
      post_dta: this.props.post_dta,
      mulher_CPF: this.props.auth.user.CPF,
      post_mulher_CPF: this.props.post_mulher_CPF,
      texto_comentario: this.state.texto,
      dta_comentario: moment()
        .parseZone()
        .format("YYYY-MM-DD HH:mm:ss")
    };

    this.props.addComentario(comentario);
    this.props.adicionaComentario({
      ...comentario,
      nome: this.props.auth.user.nome
    });
  };

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div
          style={{ marginLeft: 7 + "px", marginRight: 7 + "px" }}
          className="section"
        >
          <div className="input-field">
            <textarea
              value={this.state.texto}
              onChange={this.onChange}
              className="materialize-textarea"
              id="texto"
              name="texto"
            />
            <label style={{ fontSize: 17 + "px" }} htmlFor="texto">
              Digite seu comentário..
            </label>
            <button
              style={{ backgroundColor: "#662D91" }}
              className="btn btn-small "
            >
              Comentar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

ComentForm.propTypes = {
  auth: PropTypes.object.isRequired,
  comentarios: PropTypes.object.isRequired,
  addComentario: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  comentarios: state.comentarios
});

export default connect(
  mapStateToProps,
  { addComentario }
)(ComentForm);
