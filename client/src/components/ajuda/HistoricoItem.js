import React, { Component } from "react";
import { connect } from "react-redux";
import { finalizarHistorico } from "../../actions/historicoActions";
import moment from "moment";
import Axios from "axios";

class HistoricoItem extends Component {
  state = {
    mulher: {}
  };

  async componentWillMount() {
    let cpf =
      this.props.historico.mulher_CPF === this.props.auth.user.CPF
        ? this.props.historico.catalogo_mulher_CPF
        : this.props.auth.user.CPF;

    const mulher = await Axios.get(`http://localhost:5000/mulher/${cpf}`);
    this.setState({
      ...this.state,
      mulher: mulher.data
    });
  }

  onClickAceitar = () => {
    const {
      mulher_CPF,
      catalogo_mulher_CPF,
      dta_solicitacao
    } = this.props.historico;
    this.props.finalizarHistorico(
      {
        dta_aceite: moment()
          .parseZone()
          .format("YYYY-MM-DD HH:mm:ss"),
        mulher_CPF,
        catalogo_mulher_CPF,
        dta_solicitacao
      },
      this.props.auth.user.CPF
    );
  };

  renderContato = () => {
    const { mulher } = this.state;
    return (
      <div style={{ fontSize: 17 }} className="col s4">
        <p>Contato: </p>
        <ul className="collection">
          <li className="collection-item">
            (<span>{mulher.DDD_telefone}</span>){" "}
            <span>{mulher.num_telefone}</span>
          </li>
          <li className="collection-item">
            <span>{mulher.email}</span>
          </li>
          {mulher.link_rede_social !== null ? (
            <li className="collection-item">
              <span>{mulher.link_rede_social}</span>
            </li>
          ) : null}
        </ul>
      </div>
    );
  };

  render() {
    let render;
    const { catalogo, historico, auth } = this.props;
    if (catalogo.voluntaria) {
      if (historico.voluntaria === auth.user.nome) {
        render = (
          <div className="row">
            <div className="col s8">
              <div>
                <span className="card-title">
                  Solicitante: {this.props.historico.solicitante}
                </span>
                <span>Tipo de ajuda: {historico.especialidade}</span>
                {historico.dta_aceite === null ? (
                  <div>
                    <button
                      name="aceitar"
                      onClick={this.onClickAceitar}
                      style={{ backgroundColor: "#710090" }}
                      className="btn btn-floating btn-small halfway-fab waves-effect waves-light"
                    >
                      <i className="fa fa-check" />
                    </button>
                    <button
                      name="negar"
                      onClick={this.onClickNegar}
                      style={{
                        backgroundColor: "#710090",
                        marginRight: 46 + "px"
                      }}
                      className="btn btn-floating btn-small halfway-fab waves-effect waves-light"
                    >
                      <i className="fa fa-times" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>Finalizado</p>
                  </div>
                )}
              </div>
            </div>
            {historico.dta_aceite === null ? null : this.renderContato()}
          </div>
        );
      } else if (historico.solicitante === auth.user.nome) {
        render = (
          <div className="row">
            <div className="col s8">
              <span className="card-title">
                Voluntária: {historico.voluntaria}
              </span>
              <span>Tipo de ajuda: {historico.especialidade}</span>
              <div>
                {historico.dta_aceite === null ? (
                  <p>Pendente</p>
                ) : (
                  <p>Finalizado</p>
                )}
              </div>
            </div>
            {historico.dta_aceite === null ? null : this.renderContato()}
          </div>
        );
      }
    }

    return (
      <div style={{ width: 1000 + "px" }} className="row">
        <div className="card z-depth-3">
          <div className="card-content">{render}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo,
  auth: state.auth,
  historico1: state.historico
});

export default connect(
  mapStateToProps,
  { finalizarHistorico }
)(HistoricoItem);
