import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const updmiddleware = applyMiddleware(...middleware);
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(updmiddleware)
);

export default store;
