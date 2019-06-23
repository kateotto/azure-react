import React, { Component } from "react";
import "./style.scss";

class Infos extends Component {
  render() {
      console.log("DUPA");
      console.log("State info: " + this.props.match.params.id);
    return (
      <div>
        <p>Additional info</p>
      </div>
    );
  }
}

export default Infos;
