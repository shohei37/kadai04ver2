import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJVWCSa3sCv25LMZ8ZBinD6HRJR45pgEU",
  authDomain: "line-clone-2a4a6.firebaseapp.com",
  projectId: "line-clone-2a4a6",
  storageBucket: "line-clone-2a4a6.appspot.com",
  messagingSenderId: "414989816819",
  appId: "1:414989816819:web:b0e361aa0c5dd47fa2f886"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth };