import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getAjudas } from "../../actions/ajudaActions";
import { getMulheresCatalogo } from "../../actions/catalogoActions";
import { addHistorico } from "../../actions/historicoActions";
import moment from "moment";

class AjudaForm extends Component {
  state = {
    toggle: false,
    especialidade: "",
    mulher: ""
  };

  componentWillMount() {
    this.props.getAjudas();
  }

  onSubmit = e => {
    e.preventDefault();

    const historico = {
      dta_solicitacao: moment()
        .parseZone()
        .format("YYYY-MM-DD HH:mm:ss"),
      mulher_CPF: this.props.auth.user.CPF,
      catalogo_mulher_CPF: this.state.mulher,
      catalogo_ajuda_ID_ajuda1: this.state.especialidade
    };
    setTimeout(
      () =>
        this.setState({
          ...this.state,
          toggle: false,
          especialidade: "",
          mulher: ""
        }),
      50
    );
    this.props.addHistorico(historico, this.props.auth.user.CPF);
  };

  onToggle = () => {
    this.setState({
      ...this.state,
      toggle: !this.state.toggle
    });
  };

  onChange = e => {
    if (e.target.name === "especialidade") {
      this.props.getMulheresCatalogo(e.target.value);
    }

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  form = () => {
    if (this.props.ajuda.ajudas.length > 0) {
      return (
        <div className="row">
          <form className="col s9" onSubmit={this.onSubmit}>
            <div className="input-field">
              <select
                required
                value={this.state.especialidade}
                name="especialidade"
                onChange={this.onChange}
                className="browser-default"
              >
                <option value="" disabled>
                  Selecione a especialidade
                </option>
                {this.props.ajuda.ajudas.map(ajuda => {
                  return (
                    <option key={ajuda.ID_ajuda} value={ajuda.ID_ajuda}>
                      {ajuda.especialidade}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-field">
              {this.state.especialidade !== "" ? (
                <select
                  required
                  value={this.state.mulher}
                  name="mulher"
                  onChange={this.onChange}
                  className="browser-default"
                >
                  <option value="" disabled>
                    Selecione a voluntária
                  </option>
                  {this.props.catalogo.mulheres
                    ? this.props.catalogo.mulheres.map(mulher => {
                        return (
                          <option key={mulher.CPF} value={mulher.CPF}>
                            {mulher.nome}
                          </option>
                        );
                      })
                    : null}
                </select>
              ) : null}
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#662D91" }}
              className="btn btn-small waves-effect waves-light"
            >
              Solicitar
            </button>
          </form>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: "#662D91",
            marginBottom: 15 + "px",
            marginTop: 15 + "px"
          }}
          className="btn-floating btn-large waves-effect waves-light right"
          onClick={this.onToggle}
        >
          <i className={this.state.toggle ? "fa fa-times" : "fa fa-plus"} />
        </button>
        {this.state.toggle ? this.form() : null}
      </div>
    );
  }
}

AjudaForm.propTypes = {
  getAjudas: PropTypes.func.isRequired,
  ajuda: PropTypes.object.isRequired,
  getMulheresCatalogo: PropTypes.func.isRequired,
  catalogo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ajuda: state.ajuda,
  catalogo: state.catalogo,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getAjudas, getMulheresCatalogo, addHistorico }
)(AjudaForm);
