import React, { Component } from "react";
import { connect } from "react-redux";
import AjudaItem from "./AjudaItem";
import { PropTypes } from "prop-types";
import { getHistoricoAdm } from "../../actions/historicoActions";
import Tabela from "./Tabela";

class Relatorios extends Component {
  componentWillMount() {
    this.props.getHistoricoAdm();
  }

  render() {
    const { historicoAdm } = this.props.historico;

    return (
      <div>
        <Tabela />
        <h2>Relatório de ajudas</h2>
        {historicoAdm ? (
          historicoAdm.map(historico => (
            <AjudaItem
              key={
                historico.mulher_CPF +
                historico.catalogo_mulher_CPF +
                historico.dta_solicitacao
              }
              historico={historico}
            />
          ))
        ) : (
          <p>Histórico vazio.. </p>
        )}
      </div>
    );
  }
}

Relatorios.propTypes = {
  historico: PropTypes.object.isRequired,
  getHistoricoAdm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  historico: state.historico
});

export default connect(
  mapStateToProps,
  { getHistoricoAdm }
)(Relatorios);
