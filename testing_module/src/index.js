import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";

import App from "components/App";

const MainApp = () => {
  return (
    <Root>
      <App />
    </Root>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));
