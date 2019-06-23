import React from "react";
import Header from "./components/Header";
import Bodies from "./components/Bodies";
import Home from "./components/Home";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "./App.css";

import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/weather" component={Bodies} />
        </React.Fragment>
      </Router>
    
      </div>
    </Provider>
  );
}

export default App;
