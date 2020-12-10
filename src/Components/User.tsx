import React, { FC } from "react";

type Props = {
  imageUrl: string;
  name: string;
};

export const User: FC<Props> = ({ imageUrl, name }) => {
  return (
    <div className="user flex items-center mb-4">
      <img
        alt="user"
        className="user__image rounded-full w-12 h-12"
        src={imageUrl}
      />
      <span className="font-medium ml-2 text-sm text-black">{name}</span>
    </div>
  );
};
