import React, { FC } from "react";

// later make all these mandatory
type Props = { content: string; userName?: string; date?: string };

export const Comment: FC<Props> = ({ content, userName, date }) => {
  return (
    <li data-testid="comment-list-element" className="post__comment">
      <div>
        {!!userName && (
          <span data-testid="comment-list-element-username">{userName}</span>
        )}
        <span data-testid="comment-list-element-content">{content}</span>
      </div>
      <p data-testid="comment-list-element-date">{date}</p>
    </li>
  );
};
