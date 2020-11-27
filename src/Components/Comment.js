import React from "react";

export default function Comment({ key, content, userName, date }) {
  return (
    <li key={key} className="post__comment">
      <div>
        <span>{userName}</span>
        <span>{content}</span>
      </div>
      <p>{date}</p>
    </li>
  );
}
