import { SAVE_COMMENT, FETCH_COMMENTS } from "redux/actions/types";

const INITIAL_STATE = [];

export const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => {
        return comment.name;
      });
      return [...state, ...comments];
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
