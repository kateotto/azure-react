import React, { Component } from "react";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="subheadline">Aplikacja pogodowa <br/>
        Przygotowana przez <br/>
        Katarzynę Otto <br/>
        Macieja Matuszczaka <br/>
        Artura Rowińskiego <br/><br/>
        Przygotowana z użyciem Microsoft Azure i Raspberry Pi
        </div>
      </div>
    );
  }
}

export default Home;
