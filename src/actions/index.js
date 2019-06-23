export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const FETCH_DATA_BY_ID = "FETCH_DATA_BY_ID";
export const FETCH_DATA_BY_ID_SUCCESS = "FETCH_DATA_BY_ID_SUCCESS";
export const FETCH_DATA_BY_ID_FAIL = "FETCH_DATA_BY_ID_FAIL";

export function fetch_data() {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    fetch(`https://cdv-weather.azurewebsites.net/api/?code=eeq5eL6fQ3EJ5IIypjzrJePYd7/rS6bK0sLoaYZtzJUe59oCgRlsNA==`, {
      headers: {
        "x-functions-key":
          "eeq5eL6fQ3EJ5IIypjzrJePYd7/rS6bK0sLoaYZtzJUe59oCgRlsNA=="
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
    fetch(`https://cdv-weather.azurewebsites.net/api/${id}?code=eeq5eL6fQ3EJ5IIypjzrJePYd7/rS6bK0sLoaYZtzJUe59oCgRlsNA==`, {
      headers: {
        "x-functions-key":
          "eeq5eL6fQ3EJ5IIypjzrJePYd7/rS6bK0sLoaYZtzJUe59oCgRlsNA=="
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
