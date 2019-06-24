import React, { Component } from "react";
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Infos extends Component {
  render() {
     
      console.log("State ID: " + this.props.match.params.id);
      console.log("Nawilżenie: " + this.props.location.state.element.soil_moisture);
    return (
      <div>
        <p>SZCZEGÓŁOWE INFORMACJE</p>
        <div className="notes">
          <p><b>ID:</b> {this.props.match.params.id}</p>
          <p><b>Godzina: </b>{this.props.location.state.element.measurement_time.split("T")[1].slice(0, 8)}</p>
          <p><b>Data: </b>{this.props.location.state.element.measurement_date.split("T")[0]}</p>
          <p><b>Nawilżenie powietrza:</b> {this.props.location.state.element.soil_moisture}%</p>
          <p><b>Nawilżenie powietrza:</b> {this.props.location.state.element.air_humidity}%</p>
          <p><b>Temperatura:</b> {this.props.location.state.element.temperature}'C</p>
        </div>
      <Link to= {{pathname: "/weather"}}> <button className="backLink">WSTECZ</button> </Link>
      </div>
    );
  }
}

export default Infos;
