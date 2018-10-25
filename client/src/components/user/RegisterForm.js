import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { addAjuda } from "../../actions/ajudaActions";
import { withRouter } from "react-router-dom";

class RegisterForm extends Component {
  state = {
    CPF: "",
    nome: "",
    DDD_telefone: "",
    num_telefone: "",
    email: "",
    link_rede_social: "",
    senha: "",
    senha_confirmar: "",
    ajudas: {
      juridica: false,
      financeira: false,
      psicologica: false,
      medica: false,
      assistencia_social: false
    }
  };

  onSubmit = async e => {
    e.preventDefault();

    const user = {
      CPF: this.state.CPF,
      nome: this.state.nome,
      DDD_telefone: this.state.DDD_telefone,
      num_telefone: this.state.num_telefone,
      email: this.state.email,
      link_rede_social: this.state.link_rede_social,
      senha: this.state.senha
    };

    if (
      this.state.ajudas.juridica === false &&
      this.state.ajudas.financeira === false &&
      this.state.ajudas.psicologica === false &&
      this.state.ajudas.medico === false &&
      this.state.ajudas.assistencia_social === false
    ) {
      this.props.registerUser(user, this.props.history);
    } else {
      await this.props.registerUser(user, this.props.history);
      const { ajudas } = this.state;
      let i = 1;
      for (let key in ajudas) {
        if (ajudas[key] === true) {
          this.props.addAjuda(i, user.CPF);
        }
        i++;
      }
    }
  };

  onChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.type === "checkbox") {
      this.setState({
        ...this.state,
        ajudas: {
          ...this.state.ajudas,
          [e.target.name]: value
        }
      });
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: value
      });
    }
  };

  render() {
    return (
      <div style={{ width: 700 + "px" }} className="row">
        <h2 className="center">Registrar</h2>
        <div className="card z-depth-3 col s12">
          <div className="card-content">
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <i className=" fa fa-user-circle prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.nome}
                  name="nome"
                  id="nome"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                  required
                />
                <label style={{ fontSize: 17 + "px" }} htmlFor="nome">
                  Nome
                </label>
                <span
                  className="helper-text"
                  data-error="Digite um nome válido"
                />
              </div>

              <div className="input-field">
                <i className="fa fa-user-circle prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.CPF}
                  name="CPF"
                  id="CPF"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                  required
                />
                <label style={{ fontSize: 17 + "px" }} htmlFor="CPF">
                  CPF
                </label>
                <span
                  className="helper-text"
                  data-error="Digite um CPF válido"
                />
              </div>
              <div className="row">
                <div className="input-field col s4">
                  <i className=" fa fa-phone prefix" />
                  <input
                    style={{ fontSize: 20 + "px" }}
                    value={this.state.DDD_telefone}
                    name="DDD_telefone"
                    maxLength={2}
                    id="DDD_telefone"
                    type="tel"
                    className="validate"
                    onChange={this.onChange}
                    required
                  />
                  <label style={{ fontSize: 17 + "px" }} htmlFor="DDD_telefone">
                    DDD
                  </label>
                  <span
                    className="helper-text"
                    data-error="Digite um DDD válido"
                  />
                </div>
                <div className="input-field col s8">
                  <i className=" fa fa-mobile prefix" />
                  <input
                    style={{ fontSize: 20 + "px" }}
                    value={this.state.num_telefone}
                    name="num_telefone"
                    id="num_telefone"
                    type="tel"
                    className="validate"
                    onChange={this.onChange}
                    required
                  />
                  <label style={{ fontSize: 17 + "px" }} htmlFor="num_telefone">
                    Número
                  </label>
                  <span
                    className="helper-text"
                    data-error="Digite um número válido"
                  />
                </div>
              </div>
              <div className="input-field">
                <i className=" fa fa-envelope prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.email}
                  name="email"
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.onChange}
                  required
                />
                <label style={{ fontSize: 17 + "px" }} htmlFor="email">
                  Email
                </label>
                <span
                  className="helper-text"
                  data-error="Digite um email válido"
                />
              </div>
              <div className="input-field">
                <i className=" fa fa-key prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.senha}
                  name="senha"
                  id="senha"
                  type="password"
                  className="validate"
                  onChange={this.onChange}
                  required
                />
                <label style={{ fontSize: 17 + "px" }} htmlFor="senha">
                  Senha
                </label>
                <span
                  className="helper-text"
                  data-error="Digite uma senha válido"
                />
              </div>
              <div className="input-field">
                <i className=" fa fa-key prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.senha_confirmar}
                  name="senha_confirmar"
                  id="senha_confirmar"
                  type="password"
                  className="validate"
                  onChange={this.onChange}
                  required
                />
                <label
                  style={{ fontSize: 17 + "px" }}
                  htmlFor="senha_confirmar"
                >
                  Confirme sua senha
                </label>
                {this.state.senha === this.state.senha_confirmar ? null : (
                  <span
                    className="helper-text"
                    data-error="Digite um DDD válido"
                  />
                )}
              </div>
              <div className="input-field">
                <i className=" fa fa-link prefix" />
                <input
                  style={{ fontSize: 20 + "px" }}
                  value={this.state.link_rede_social}
                  name="link_rede_social"
                  id="link_rede_social"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label
                  style={{ fontSize: 17 + "px" }}
                  htmlFor="link_rede_social"
                >
                  Link
                </label>
                <span
                  className="helper-text"
                  data-error="Digite um link válido"
                />
              </div>
              <div className="input-field">
                <p>
                  <label>
                    <input
                      checked={this.state.ajudas.juridica}
                      name="juridica"
                      type="checkbox"
                      className="checkbox-orange"
                      onChange={this.onChange}
                    />
                    <span>Jurídica</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      checked={this.state.ajudas.medica}
                      name="medica"
                      type="checkbox"
                      className="checkbox-orange"
                      onChange={this.onChange}
                    />
                    <span>Médica</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      checked={this.state.ajudas.financeira}
                      name="financeira"
                      type="checkbox"
                      className="checkbox-orange"
                      onChange={this.onChange}
                    />
                    <span>Financeira</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      checked={this.state.ajudas.psicologica}
                      name="psicologica"
                      type="checkbox"
                      className="checkbox-orange"
                      onChange={this.onChange}
                    />
                    <span>Psicológica</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      checked={this.state.ajudas.assistencia_social}
                      name="assistencia_social"
                      type="checkbox"
                      className="checkbox-orange"
                      onChange={this.onChange}
                    />
                    <span>Assistência social</span>
                  </label>
                </p>
              </div>
              <button
                type="submit"
                value="Registrar"
                style={{ backgroundColor: "#662D91" }}
                className="btn waves-effect waves-light"
              >
                <i className="fa fa-user-plus" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  ajuda: state.ajuda
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser, addAjuda }
  )(RegisterForm)
);
