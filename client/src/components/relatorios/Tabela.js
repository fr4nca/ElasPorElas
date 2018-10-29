import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRelatorios,
  getRelatoriosMulheres,
  getRelatorioMulheresAjudas
} from "../../actions/relatoriosActions";

class Tabela extends Component {
  state = {
    relatorio: ""
  };
  componentWillMount() {}

  onChange = e => {
    switch (e.target.value) {
      case "1":
        this.props.getRelatorios();
        break;
      case "2":
        this.props.getRelatoriosMulheres();
        break;
      case "3":
        this.props.getRelatorioMulheresAjudas();
        break;
      default:
        break;
    }
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { relatorios } = this.props.relatorios;
    let render;
    if (relatorios !== undefined) {
      if (relatorios.length > 0) {
        switch (this.state.relatorio) {
          case "1":
            render = (
              <table className="highlight">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade de ajudas</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorios.map(linha => (
                    <tr key={linha.ID_ajuda}>
                      <td>{linha.especialidade}</td>
                      <td>{linha.quantidade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
            break;
          case "2":
            render = (
              <table className="highlight">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade de voluntárias</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorios.map(linha => (
                    <tr key={linha.ID_ajuda}>
                      <td>{linha.especialidade}</td>
                      <td>{linha.qtmulheres}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
            break;
          case "3":
            render = (
              <table className="highlight">
                <thead>
                  <tr>
                    <th>Mulher</th>
                    <th>Quantidade de ajudas</th>
                  </tr>
                </thead>
                <tbody>
                  {relatorios.map(linha => (
                    <tr key={linha.CPF}>
                      <td>{linha.nome}</td>
                      <td>{linha.qtAjuda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
            break;
          default:
            render = null;
        }
      }
    }
    return (
      <div>
        {this.props.relatorios.relatorios !== undefined ? render : null}
        <div
          className="input-field col s3 right"
          style={{ marginTop: 50 + "px" }}
        >
          <select
            required
            value={this.state.relatorio}
            name="relatorio"
            onChange={this.onChange}
            className="browser-default"
          >
            <option value="" disabled>
              Selecione um relatório
            </option>
            <option value="1">Quantidade de ajudas</option>
            <option value="2">Quantidade de voluntárias</option>
            <option value="3">Atendimentos por mulher</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  relatorios: state.relatorios
});

export default connect(
  mapStateToProps,
  { getRelatorios, getRelatoriosMulheres, getRelatorioMulheresAjudas }
)(Tabela);
