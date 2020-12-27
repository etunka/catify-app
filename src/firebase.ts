// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD40Oht-JJFRlnIjDVZ6a_lyIlCJTR3x0Y",
  authDomain: "catify-bcca7.firebaseapp.com",
  projectId: "catify-bcca7",
  storageBucket: "catify-bcca7.appspot.com",
  messagingSenderId: "852235635168",
  appId: "1:852235635168:web:f5b30a9438c42f764ac385",
  measurementId: "G-HTT1CDRGE2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var provider = new firebase.auth.GoogleAuthProvider();

export function handleAuthentication() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      //( This gives you a Google Access Token. You can use it to access the Google API.
      // if (!result.credential) {
      //   return;
      // }
      // var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
