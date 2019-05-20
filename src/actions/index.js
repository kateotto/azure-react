export function getAPI(item) {
  return async dispatch => {
    fetch(`https://cdv-weather-station.azurewebsites.net/api/`, {
      headers: {
        "x-functions-key":
          "hMuOsd2noNwCiaIyqTn6KKZw3BQE4jCzSTAaVfYgUKfDb49eaeRC7w=="
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else response.json().then(() => new Error("Wystąpił błąd"));
      })
      .then(json => {
        dispatch({ type: "bookTitle", payload: json });
      })
      .catch(err => dispatch({ type: "error", payload: "Wystąpił błąd" }));
  };
}
