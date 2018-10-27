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
    let render;
    if (this.props.historico.historico.length > 0) {
      render = this.props.historico.historico.map(historico => (
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
      render = <h3>Não há ajudas</h3>;
    }

    return (
      <div style={{ width: 1000 + "px" }} className="container">
        <div className="row">
          <div className="col s4 m9 l12">
            <HistoricoForm />
            <h2>Histórico de ajuda</h2>
          </div>
        </div>
        {render}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  historico: state.historico
});

export default connect(
  mapStateToProps,
  { getHistorico }
)(Historico);
