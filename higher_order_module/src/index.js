import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "Root";

import App from "components/App";

const MainApp = () => {
  return (
    <Root>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Root>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));
