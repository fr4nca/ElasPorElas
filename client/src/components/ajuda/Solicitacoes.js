import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getSolicitacoes } from "../../actions/historicoActions";
import HistoricoItem from "./HistoricoItem";

class Solicitacoes extends Component {
  componentWillMount() {
    if (this.props.auth.user.CPF)
      this.props.getSolicitacoes(this.props.auth.user.CPF);
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
      render = <h3>Não há solicitações</h3>;
    }

    return (
      <div style={{ width: 1000 + "px" }} className="container">
        <div className="row">
          <div className="col s4 m9 l12">
            <h2 className="center">Solicitações</h2>
          </div>
        </div>
        {render}
      </div>
    );
  }
}

Solicitacoes.propTypes = {
  auth: PropTypes.object.isRequired,
  historico: PropTypes.object.isRequired,
  getSolicitacoes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  historico: state.historico
});

export default connect(
  mapStateToProps,
  { getSolicitacoes }
)(Solicitacoes);
