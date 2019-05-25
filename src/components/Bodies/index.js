import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetch_data } from "../../actions";

class Bodies extends PureComponent {
  render() {
    const { fetch_data, entries, loading, error } = this.props;
    if (loading) {
      return "Loading...";
    }
    return (
      <React.Fragment>
        <div className="containerWrapper">
          <h2>WEATHER API</h2>
          <button onClick={fetch_data}>TEST</button>
        </div>
        {entries ? entries.map(element => <p>{element.ID}</p>) : <p>{error}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entries,
    error: state.error,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_data: () => dispatch(fetch_data())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bodies);
