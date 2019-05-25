import React from "react";
import Header from "./components/Header";
import Bodies from "./components/Bodies";
import { Provider } from "react-redux";
import "./App.css";

import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Bodies />
      </div>
    </Provider>
  );
}

export default App;
