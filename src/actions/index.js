export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const FETCH_DATA_BY_ID_SUCCESS = "FETCH_DATA_BY_ID_SUCCESS";
export const FETCH_DATA_BY_ID_FAIL = "FETCH_DATA_BY_ID_FAIL";

export function fetch_data() {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    fetch(`https://cdv-iot-cloud.azurewebsites.net/api/?code=/Ukhl5arUOXFvettOHX4W0EUdNW15aHR/xkysjSOECMCEITuVDUeKA==`, {
      headers: {
        "x-functions-key":
          "/Ukhl5arUOXFvettOHX4W0EUdNW15aHR/xkysjSOECMCEITuVDUeKA=="
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else response.json().then(() => new Error("Wystąpił błąd"));
      })
      .then(json => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: json });
      })
      .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
  };
}

export function fetch_data_by_id(id) {
  return dispatch => {
    dispatch({ type: FETCH_DATA_BY_ID });
    fetch(`https://cdv-iot-cloud.azurewebsites.net/api/${id}?code=/Ukhl5arUOXFvettOHX4W0EUdNW15aHR/xkysjSOECMCEITuVDUeKA==`, {
      headers: {
        "x-functions-key":
          "/Ukhl5arUOXFvettOHX4W0EUdNW15aHR/xkysjSOECMCEITuVDUeKA=="
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else res.json().then(() => new Error("Wystąpił błąd"));
      })
      .then(json => {
        dispatch({ type: FETCH_DATA_BY_ID_SUCCESS, payload: json });
      })
      .catch(err => dispatch({ type: FETCH_DATA_BY_ID_FAIL, payload: err }));
  };
}
