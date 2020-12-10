import React, { FC, useState, useRef } from "react";
import { ReactComponent as LikeIcon } from "./paw.svg";
import { ReactComponent as LikeIconChecked } from "./paw--red.svg";
import { ReactComponent as CommentIcon } from "./comment.svg";
import { CommentForm } from "./CommentForm";
import { Comments } from "./Comments";

type Props = {
  imageUrl: string;
  caption?: string;
  date: string;
  likes?: string;
};

export const Post: FC<Props> = ({
  imageUrl,
  caption = "",
  date,
  likes,
  children,
}) => {
  // read more/less
  const isAboveCharLimit = caption.length > 100;
  const excerpt = caption.substring(0, 100);
  const [showExcerpt, setShowExcerpt] = useState(isAboveCharLimit);

  // toggle like button
  const [reaction, setReaction] = useState("like");

  // add new comment
  const [comments, setComments] = useState([
    "comment1",
    "comment2",
    "comment3",
  ]);
  const addComment = (newComment: string) =>
    setComments([...comments, newComment]);

  // focus text area when clicked on commentIcon
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="post bg-transparent px-4 py-6">
      {children}
      <img alt="post__image" className="entry__image" src={imageUrl} />
      <div className="font-medium text-sm text-black mt-4">{likes} likes</div>
      <div className="flex">
        <button className="focus:outline-none">
          <CommentIcon
            className="icon-small my-4 mr-3 fill-black"
            onClick={() => {
              if (textRef.current) {
                textRef.current.focus();
              }
            }}
          />
        </button>
        <button
          className="focus:outline-none"
          onClick={() => setReaction(reaction === "like" ? "liked" : "like")}
        >
          {reaction === "like" ? (
            <LikeIcon className="icon-small my-4 fill-black" />
          ) : (
            <LikeIconChecked className="icon-small my-4" />
          )}
        </button>
      </div>
      <p className="post__caption text-sm text-black">
        {showExcerpt ? excerpt : caption}
      </p>
      {isAboveCharLimit && (
        <a
          className="post__more"
          onClick={() => {
            setShowExcerpt(!showExcerpt);
          }}
        >
          <span className="text-sm text-black font-semibold text-opacity-50 cursor-pointer">
            {showExcerpt ? "...more >>" : " less <<"}
          </span>
        </a>
      )}
      {!!comments && <Comments commentsList={comments} />}
      <p className="post__date text-xxs font-thin my-4">{date}</p>
      <CommentForm postComment={addComment} textRef={textRef} />
    </div>
  );
};
