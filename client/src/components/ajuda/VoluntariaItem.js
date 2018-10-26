import React, { Component } from "react";

export default class VoluntariaItem extends Component {
  render() {
    const { voluntaria } = this.props;
    return (
      <div style={{ marginBottom: 30 + "px" }} className="card z-depth-3">
        <div className="card-content">
          <div style={{ fontSize: 34 + "px" }} className="card-title">
            <strong> {voluntaria.nome}</strong>
          </div>
          <p style={{ fontSize: 24 + "px" }}>{voluntaria.especialidade}</p>
        </div>
      </div>
    );
  }
}
