import React, { FC } from "react";

type Props = { comment: string; userName?: string };

export const Comment: FC<Props> = ({ comment, userName }) => {
  return (
    <li data-testid="comment-list-element" className="post__comment">
      <div>
        {!!userName && (
          <span
            className="font-semibold text-sm mr-2"
            data-testid="comment-list-element-username"
          >
            {userName}
          </span>
        )}
        <span className="text-sm" data-testid="comment-list-element-content">
          {comment}
        </span>
      </div>
    </li>
  );
};
