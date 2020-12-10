import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="header flex items-center bg-turquoise px-6 pb-2 shadow sm:justify-center">
      <img className="w-20 sm:w-48" src="./logo-transparent02.png" alt="" />
      <span className="text-5xl sm:text-6xl text-white font-logo">Catify</span>
      <span className="font-default text-yellow mt-4 ml-4 text-sm sm:text-base">
        freely share cat pics!
      </span>
    </div>
  );
};
