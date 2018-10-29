import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getVoluntarias } from "../../actions/catalogoActions";
import { getAjudas } from "../../actions/ajudaActions";
import { getVoluntariasEspecifico } from "../../actions/catalogoActions";
import VoluntariaItem from "./VoluntariaItem";

class Voluntarias extends Component {
  state = {
    especialidade: "0"
  };

  componentWillMount() {
    this.props.getVoluntarias();
    this.props.getAjudas();
  }

  onChange = e => {
    switch (e.target.value) {
      case "0":
        this.props.getVoluntarias();
        break;
      case "1":
        this.props.getVoluntariasEspecifico(1);
        break;
      case "2":
        this.props.getVoluntariasEspecifico(2);
        break;
      case "3":
        this.props.getVoluntariasEspecifico(3);
        break;
      case "4":
        this.props.getVoluntariasEspecifico(4);
        break;
      case "5":
        this.props.getVoluntariasEspecifico(5);
        break;
      default:
    }
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    let render;
    if (this.props.catalogo.voluntarias) {
      if (
        this.props.catalogo.voluntarias.length > 0 &&
        this.state.especialidade === "0"
      ) {
        render = this.props.catalogo.voluntarias.map(voluntaria => (
          <VoluntariaItem
            voluntaria={voluntaria}
            key={voluntaria.CPF + voluntaria.ID_ajuda}
          />
        ));
      } else if (this.props.catalogo.voluntariasEspecifica.length > 0) {
        render = this.props.catalogo.voluntariasEspecifica.map(voluntaria => (
          <VoluntariaItem
            voluntaria={voluntaria}
            key={voluntaria.CPF + voluntaria.ID_ajuda}
          />
        ));
      } else {
        render = <h3>Não há ajudas</h3>;
      }
    }

    let renderSelect;
    if (this.props.ajuda) {
      if (this.props.ajuda.ajudas.length > 0) {
        renderSelect = (
          <div
            className="input-field col s3 right"
            style={{ marginTop: 50 + "px" }}
          >
            <select
              required
              value={this.state.especialidade}
              name="especialidade"
              onChange={this.onChange}
              className="browser-default"
            >
              <option value="0" disabled>
                Especialidade
              </option>
              <option value="0">Todos</option>
              {this.props.ajuda.ajudas.map(ajuda => {
                return (
                  <option key={ajuda.ID_ajuda} value={ajuda.ID_ajuda}>
                    {ajuda.especialidade}
                  </option>
                );
              })}
            </select>
          </div>
        );
      } else {
        renderSelect = null;
      }
    }

    return (
      <div className="container">
        <div className="row">
          <h2 className="col s9 center">Voluntárias</h2>
          {renderSelect}
        </div>
        {render}
      </div>
    );
  }
}

Voluntarias.propTypes = {
  catalogo: PropTypes.object.isRequired,
  getVoluntarias: PropTypes.func.isRequired,
  getAjudas: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  catalogo: state.catalogo,
  ajuda: state.ajuda
});

export default connect(
  mapStateToProps,
  { getVoluntarias, getAjudas, getVoluntariasEspecifico }
)(Voluntarias);
