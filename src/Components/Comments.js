import React from "react";
import Comment from "./Comment";

export default function Comments({ commentsList }) {
  return (
    <ul className="post__comments">
      {commentsList.map((el, key) => (
        <Comment content={el} key={key} />
      ))}
    </ul>
  );
}
