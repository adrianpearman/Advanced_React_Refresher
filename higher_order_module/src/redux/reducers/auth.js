import { CHANGE_AUTH } from "redux/actions/types";

// const INITIAL_STATE = {
//   signedIn: false
// };

const INITIAL_STATE = false;

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
