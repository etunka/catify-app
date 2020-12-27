import React, { FC, useState } from "react";
import { handleAuthentication } from "../firebase";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as LoginIcon } from "./login.svg";
import firebase from "firebase/app";

export const UserMenu: FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  return (
    <div className="user-menu flex items-center mt-4">
      <a href="./" className="user-menu__home mr-4">
        <HomeIcon className="icon-small my-4 fill-white" />
      </a>

      {user ? (
        <button className="outline-none focus:outline-none">
          <img
            className="w-8 border-white-500 border-opacity-100 rounded-full"
            src={user.photoURL || ""}
            alt=""
          />
        </button>
      ) : (
        <button
          onClick={() => {
            handleAuthentication().then((userData) => {
              if (userData) {
                setUser(userData);
              }
            });
          }}
          className="user-menu__login focus:outline-none"
        >
          <LoginIcon className="icon-small my-4 fill-white" />
        </button>
      )}
    </div>
  );
};
