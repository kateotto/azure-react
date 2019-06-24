import React from "react";
import Header from "./components/Header";
import Bodies from "./components/Bodies";
import Home from "./components/Home";
import Infos from "./components/Infos";
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
          <Route path="/additional/:id" component={Infos} />
        </React.Fragment>
      </Router>
    
      </div>
    </Provider>
  );
}

export default App;
