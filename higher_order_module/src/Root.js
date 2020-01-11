import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";

export default ({ initialState, children }) => {
  return <Provider store={store(initialState)}>{children}</Provider>;
};
