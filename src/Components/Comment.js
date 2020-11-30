import React from "react";

export default function Comment({ content, userName, date }) {
  return (
    <li className="post__comment">
      <div>
        <span>{userName}</span>
        <span>{content}</span>
      </div>
      <p>{date}</p>
    </li>
  );
}
