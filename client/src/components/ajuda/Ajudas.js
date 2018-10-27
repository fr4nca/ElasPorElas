import React, { Component } from "react";
import { connect } from "react-redux";
import AjudaItem from "./AjudaItem";
import { PropTypes } from "prop-types";
import { getHistoricoAdm } from "../../actions/historicoActions";

class Ajudas extends Component {
  componentWillMount() {
    this.props.getHistoricoAdm();
  }

  render() {
    const { historicoAdm } = this.props.historico;

    return (
      <div>
        <h2>Relatório de ajudas</h2>
        {historicoAdm
          ? historicoAdm.map(historico => (
              <AjudaItem
                key={
                  historico.mulher_CPF +
                  historico.catalogo_mulher_CPF +
                  historico.dta_solicitacao
                }
                historico={historico}
              />
            ))
          : null}
      </div>
    );
  }
}

Ajudas.propTypes = {
  historico: PropTypes.object.isRequired,
  getHistoricoAdm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  historico: state.historico
});

export default connect(
  mapStateToProps,
  { getHistoricoAdm }
)(Ajudas);
