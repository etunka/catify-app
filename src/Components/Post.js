import React, { useState, useRef } from "react";
import { ReactComponent as LikeIcon } from "./paw.svg";
import { ReactComponent as LikeIconChecked } from "./paw--red.svg";
import { ReactComponent as CommentIcon } from "./comment.svg";
import CommentForm from "./CommentForm";

export default function Post({ image, caption = "", date, likes, children }) {
  // read-more functionality
  const isAboveCharLimit = caption.length > 100;
  const excerpt = caption.substring(0, 100);
  const [showExcerpt, setShowExcerpt] = useState(isAboveCharLimit);

  // toggle like button
  const [reaction, setReaction] = useState("like");

  // focus text area when clicked on commentIcon
  const textRef = useRef(null);

  return (
    <div className="post mb-8 bg-yellow p-4 shadow">
      {children}
      <img alt="post__image" className="entry__image" src={image} />
      <div className="font-medium text-sm text-black mt-4">{likes} likes</div>
      <div className="flex">
        <button className="focus:outline-none">
          <CommentIcon
            className="icon-small my-4 mr-3 fill-black"
            onClick={() => {
              textRef.current.focus();
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
      <p className="post__caption mt-2 text-sm text-black">
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
      <p className="post__date text-xxs font-thin my-4">{date}</p>
      <CommentForm textRef={textRef} />
    </div>
  );
}
