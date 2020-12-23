import React, { FC } from "react";
import { UserData } from "../types";

type Props = {
  user: UserData;
};

export const User: FC<Props> = ({ user }) => {
  return (
    <div className="user flex items-center mb-4">
      <img
        alt="user"
        className="user__image rounded-full w-12 h-12"
        src={user.imageUrl}
      />
      <span className="font-medium ml-2 text-sm text-black">{user.name}</span>
    </div>
  );
};
