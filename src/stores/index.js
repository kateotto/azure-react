import { createStore, applyMiddleware } from "redux";
import appReducer from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(appReducer, applyMiddleware(logger, thunk));

export default store;
