import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetch_data } from "../../actions";
import "bootstrap/dist/css/bootstrap.css";
import { Temperature, Humidity } from 'react-environment-chart';
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Bodies extends PureComponent {
  componentDidMount(){
    
  }
  render() {
  
    const { fetch_data, entries, loading, error } = this.props;
    if (loading) {
      console.log("Entry: " + entries);
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
                 WILGOTNOŚĆ <br /> GLEBY
                </td>
                <td>WIĘCEJ</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td className="table-field">
                  {entries ? (
                    entries.map(element => <p>{element.ID}</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td className="table-field">
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
                <td className="table-field">
                  {entries ? (
                    entries.map(element => <p>{element.temperature} &#8451;</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td className="table-field">
                  {entries ? (
                    entries.map(element => <p>{element.air_humidity}%</p>)
                  ) : (
                      <p>{error}</p>
                    )}
                </td>
                <td className="table-field">
                   {entries ? (
                    entries.map(element => <p>{element.soil_moisture}%</p>)
                  ) : (
                    <p>{error}</p>
                  )}
                </td>
               
               
                <td className="table-field">
                  {entries ? (
                    entries.map(element => 
                    <Link to={{
                      pathname: `/additional/${element.ID}`,
                      state: {element: element,
                        soilMousture: element.soil_moisture}
                    }}>
                    <p>
                      <button className="more-btn">WIĘCEJ</button>
                    </p>
                    </Link>
                    )
                 ) : (
                    <p>{error}</p>
                  )}
                </td>
             
              </tr>
            </thead>
          </table>
          <div className="charts">
            <Temperature value={entries ? (entries.slice(-1)[0].temperature) : "null"} />
            <Humidity value={entries ? (entries.slice(-1)[0].air_humidity) : "null"} />
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
