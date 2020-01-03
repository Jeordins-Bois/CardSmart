import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

//? Import reducers
import userReducer from "./reducers/userReducer";
import headerReducer from "./reducers/headerReducer";
import comprehendReducer from "./reducers/comprehendReducer";

const rootReducer = combineReducers({
  userReducer,
  headerReducer,
  comprehendReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
  applyMiddleware(promiseMiddleware)
  )
);
