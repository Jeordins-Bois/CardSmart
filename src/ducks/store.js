import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

//? Import reducers
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  userReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)));
