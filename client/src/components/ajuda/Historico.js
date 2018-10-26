import React, { Component } from "react";
import { connect } from "react-redux";
import { getHistorico } from "../../actions/historicoActions";
import HistoricoItem from "./HistoricoItem";
import HistoricoForm from "./HistoricoForm";

class Historico extends Component {
  componentWillMount() {
    this.props.getHistorico(this.props.auth.user.CPF);
  }

  render() {
    let cu;
    if (this.props.historico.historico.length > 0) {
      cu = this.props.historico.historico.map(historico => (
        <HistoricoItem
          key={
            historico.mulher_CPF +
            historico.catalogo_mulher_CPF +
            historico.dta_solicitacao
          }
          historico={historico}
        />
      ));
    } else {
      cu = <h3>Não há histórico</h3>;
    }

    return (
      <div style={{ width: 1000 + "px" }} className="container">
        <HistoricoForm />
        <h2 className="center">Histórico</h2>
        {cu}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  mulher: state.mulher,
  historico: state.historico
});

export default connect(
  mapStateToProps,
  { getHistorico }
)(Historico);
