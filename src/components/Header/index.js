import React, { Component } from "react";
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter} from "react-router";


class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="display-2">APLIKACJA POGODOWA</h1>
        <div className="">
        <ul>
            <Link to="/">Strona domowa </Link>
            <Link to="/weather">Pogoda</Link>
            </ul>
        </div>
       
      </div>
    );
  }
}

export default withRouter(Header);
