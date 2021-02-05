import { PostData } from "./types";

export enum actionTypes {
  SET_POSTS = "SET_POSTS",
  DELETE_COMMENT = "DELETE_COMMENT",
}

interface SetPostsAction {
  type: typeof actionTypes.SET_POSTS;
  payload: PostData[];
}

interface DeleteCommentAction {
  type: typeof actionTypes.DELETE_COMMENT;
  payload: number;
}

export type AppActionTypes = SetPostsAction | DeleteCommentAction;

export function setPosts(posts: PostData[]): AppActionTypes {
  return {
    type: actionTypes.SET_POSTS,
    payload: posts,
  };
}

export function deleteComment(commentId: number): AppActionTypes {
  return {
    type: actionTypes.DELETE_COMMENT,
    payload: commentId,
  };
}
