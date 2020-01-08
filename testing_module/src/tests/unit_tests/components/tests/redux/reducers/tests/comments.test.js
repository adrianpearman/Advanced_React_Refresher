import { commentReducer } from "redux/reducers/comments";
import { SAVE_COMMENT } from "redux/actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles actions with an unknown type", () => {
  const newState = commentReducer([], { type: "kakdhjhaskdhjasd" });
  expect(newState).toEqual([]);
});
