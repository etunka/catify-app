import React, { FC } from "react";
import { UserMenu } from "./UserMenu";

export const Header: FC = () => {
  return (
    <div className="header flex items-center justify-between bg-turquoise px-6 pb-2 shadow">
      <div className="header__logo flex items-center sm:justify-center">
        <a href="/">
          <img className="w-20 sm:w-48" src="./logo-transparent02.png" alt="" />
        </a>
        <span className="text-5xl sm:text-6xl text-white font-logo">
          Catify
        </span>
        {/* <span className="font-default text-yellow mt-4 ml-4 text-sm sm:text-base">
          freely share cat pics!
        </span> */}
      </div>

      <UserMenu />
    </div>
  );
};
