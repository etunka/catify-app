import React from "react";

export default function CommentForm() {
  return (
    <form
      method="POST"
      className="h-10 px-4 py-2 flex-centered background-transparent border border-turquoise border-opacity-25 bg-transparent rounded"
    >
      <textarea
        className=".w-4/5 h-10 py-2 focus:outline-none resize-none bg-transparent "
        placeholder="Add a comment..."
        maxLength="300"
      />
      <input
        type="submit"
        value="Post"
        className="text-turquoise text-opacity-50 cursor-not-allowed font-semibold"
        disabled
      ></input>
    </form>
  );
}
