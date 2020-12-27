import React, { FC } from "react";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as LoginIcon } from "./login.svg";

export const UserMenu: FC = () => {
  return (
    <div className="user-menu flex items-center mt-4">
      <a href="./" className="user-menu__home mr-4">
        <HomeIcon className="icon-small my-4 fill-white" />
      </a>
      <button className="user-menu__login focus:outline-none">
        <LoginIcon className="icon-small my-4 fill-white" />
      </button>
    </div>
  );
};
