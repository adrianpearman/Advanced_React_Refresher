import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import reducer from "redux/reducers";
import asyncMiddleware from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

const composeEnhancers = composeWithDevTools({});

// const middleware = [reduxPromise, thunk];
const middleware = [asyncMiddleware, stateValidator];

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const store = initialState => {
  return createStore(
    reducer,
    { ...initialState },
    composeEnhancers(applyMiddleware(...middleware))
  );
};
export default store;
