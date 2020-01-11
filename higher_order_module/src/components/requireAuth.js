import React from "react";
import { connect } from "react-redux";

const requireAuth = ChildComponent => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.isUserAuthenticated();
    }

    componentDidUpdate() {
      this.isUserAuthenticated();
    }

    isUserAuthenticated() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
