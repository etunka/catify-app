import React from "react";
import firebase from "firebase/app";

export const UserContext = React.createContext<firebase.User | null>(null);
