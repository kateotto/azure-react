import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetch_data } from "../../actions";
import "bootstrap/dist/css/bootstrap.css";
import { Temperature, Humidity } from 'react-environment-chart';
import "./style.scss";

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
          <button
            type="button"
            className="btn btn-success"
            onClick={fetch_data}
          >
            POBIERZ WYNIKI
          </button>
          <br />
          <table className="table">
            <thead className="table-header">
              <tr>
                <td>ID</td>
                <td>
                  GODZINA <br /> POMIARU
                </td>
                <td>TEMPERATURA</td>
                <td>
                  WILGOTNOŚĆ
                  <br /> POWIETRZA
                </td>
                <td>
                  CZUJNIK <br /> RUCHU{" "}
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>
                  {entries ? (
                    entries.map(element => <p>{element.ID}</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td>
                  {entries ? (
                    entries.map(element => (
                      <p>
                        {element.measurement_time.split("T")[1].slice(0, 8)}
                      </p>
                    ))
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td>
                  {entries ? (
                    entries.map(element => <p>{element.temperature} &#8451;</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td>
                  {entries ? (
                    entries.map(element => <p>{element.air_humidity}%</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td />
              </tr>
            </thead>
          </table>
          <div className="charts">
            <Temperature value={entries ? (entries.map(element => element.temperature.length - 1)) : "null"} />
            <Humidity value={entries ? (entries.map(element => element.air_humidity.length - 1)) : "null"} />
          </div>
        </div>
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
