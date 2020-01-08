import { createStore, compose, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import thunk from "thunk";
import reducer from "redux/reducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const store = initialState => {
  return createStore(
    reducer,
    { ...initialState },
    composeEnhancers(applyMiddleware(reduxPromise))
  );
};
export default store;
