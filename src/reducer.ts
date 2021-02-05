import { Action } from "redux";
import { actionTypes, AppActionTypes } from "./actions";
import { State } from "./types";

const initialState: State = {
  posts: [],
  page: 1,
};

export default function appReducer(
  state = initialState,
  action: AppActionTypes
): State {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actionTypes.DELETE_COMMENT:
      const commentId = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
}
