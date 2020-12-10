import React from "react";
import { render } from "@testing-library/react";
import { Comment } from "./Comment";

describe("Comment component", () => {
  it("should not render user name element if userName is empty", () => {
    const { getByTestId, queryByTestId } = render(
      <Comment content="YOLO" date="yesterday" />
    );

    expect(
      queryByTestId("comment-list-element-username")
    ).not.toBeInTheDocument();
  });

  it("should  render user name element if userName is empty", () => {
    const { getByTestId, queryByTestId, debug } = render(
      <Comment content="YOLO" userName="bora" date="yesterday" />
    );

    expect(getByTestId("comment-list-element-username")).toHaveTextContent(
      /^bora$/
    );
  });
});
