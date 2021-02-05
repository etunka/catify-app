import React, { FC } from "react";
import { Comment } from "./Comment";

type Props = { commentsList: any };
export const Comments: FC<Props> = ({ commentsList }) => {
  return (
    <ul className="post__comments">
      {commentsList.map((el: any, key: any) => (
        <Comment comment={el.comment} userName={el.userName} key={key} />
      ))}
    </ul>
  );
};
