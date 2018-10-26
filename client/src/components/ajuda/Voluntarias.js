import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getVoluntarias } from "../../actions/catalogoActions";
import VoluntariaItem from "./VoluntariaItem";

class Voluntarias extends Component {
  componentWillMount() {
    this.props.getVoluntarias();
  }

  render() {
    let render;
    if (this.props.catalogo.voluntarias) {
      if (this.props.catalogo.voluntarias.length > 0) {
        render = this.props.catalogo.voluntarias.map(voluntaria => (
          <VoluntariaItem
            voluntaria={voluntaria}
            key={voluntaria.CPF + voluntaria.ID_ajuda}
          />
        ));
      } else {
        render = <h3>Não há ajudas</h3>;
      }
    }

    return (
      <div style={{ width: 600 + "px" }} className="container">
        <h2 className="center">Voluntárias</h2>
        {render}
      </div>
    );
  }
}

Voluntarias.propTypes = {
  catalogo: PropTypes.object.isRequired,
  getVoluntarias: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  catalogo: state.catalogo
});

export default connect(
  mapStateToProps,
  { getVoluntarias }
)(Voluntarias);
