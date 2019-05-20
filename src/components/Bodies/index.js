import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getAPI } from "../../actions";
import _ from "lodash";
//import BookDetails from "../BookDetails";

class Bodies extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      hasError: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="containerWrapper">
          <h2>WEATHER API</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Bodies;
