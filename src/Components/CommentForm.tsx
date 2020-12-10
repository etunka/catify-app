import React, { FC, useState } from "react";
import classNames from "classnames";

type Props = {
  textRef: React.RefObject<HTMLTextAreaElement>;
  postComment: (comment: string) => void;
};

export const CommentForm: FC<Props> = ({ textRef, postComment }) => {
  const [textContent, setTextContent] = useState("");

  const buttonClass = classNames(
    "text-turquoise font-semibold focus:outline-none text-opacity-50 bg-transparent",
    {
      "text-opacity-100 cursor-pointer ": textContent !== "",
    }
  );

  return (
    <form
      method="POST"
      className="h-10 px-4 py-2 flex-centered bg-transparent border border-turquoise border-opacity-25 bg-transparent rounded"
    >
      <textarea
        ref={textRef}
        className="w-4/5 h-10 py-2 focus:outline-none resize-none bg-transparent "
        placeholder="Add a comment..."
        maxLength={300}
        onChange={(e) => setTextContent(e.target.value)}
        value={textContent}
      />
      <input
        id="post-comment"
        type="submit"
        value="Post"
        className={buttonClass}
        disabled={textContent === "" ? true : false}
        onClick={(e) => {
          e.preventDefault();
          postComment(textContent);
          setTextContent("");
        }}
      ></input>
    </form>
  );
};
