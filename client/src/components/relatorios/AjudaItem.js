import React, { Component } from "react";
import moment from "moment";

export default class AjudaItem extends Component {
  render() {
    const { historico } = this.props;
    const { dta_solicitacao } = historico;
    const data = moment(dta_solicitacao)
      .parseZone()
      .format("YYYY-MM-DD HH:mm:ss");

    let render = (
      <div className="row">
        <div className="col s6 m8 l8">
          <span className="card-title">Voluntária: {historico.voluntaria}</span>
          <span className="card-title">
            Solicitante: {historico.solicitante}
          </span>
          <span>
            Tipo de ajuda: {historico.especialidade} <br />
          </span>
          <span>Data de solicitação: {data}</span>
          <div>
            {historico.cancelada.data[0] === 1 ? (
              <p>Cancelada</p>
            ) : historico.dta_aceite === null ? (
              <p>Pendente</p>
            ) : (
              <p>Finalizado</p>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div className="row">
        <div className="col s4 m9 l12">
          <div className="card z-depth-3">
            <div className="card-content">{render}</div>
          </div>
        </div>
      </div>
    );
  }
}
