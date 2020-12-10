import React, { FC } from "react";
import { Comment } from "./Comment";

type Props = { commentsList: string[] };
export const Comments: FC<Props> = ({ commentsList }) => {
  return (
    <ul className="post__comments">
      {commentsList.map((el, key) => (
        <Comment content={el} key={key} />
      ))}
    </ul>
  );
};
