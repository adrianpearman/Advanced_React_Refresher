import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "redux/actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Call an action creator
    this.props.saveComment(this.state.comment);
    // clear text area
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comments } = state;
  return { comments };
};

const mapDispatchToProps = {
  saveComment: actions.saveComment,
  fetchComments: actions.fetchComments
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
