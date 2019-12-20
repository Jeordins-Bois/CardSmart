import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

//? Import reducers
import userReducer from "./reducers/userReducer";
import headerReducer from "./reducers/headerReducer";

const rootReducer = combineReducers({
  userReducer,
  headerReducer
});

export default createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
  applyMiddleware(promiseMiddleware)
  // )
);
