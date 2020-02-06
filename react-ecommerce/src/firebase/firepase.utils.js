import firebase from "firebase/app";

// for the database
import "firebase/firestore";
// for the authentication
import "firebase/auth";

const config = {
 
};

// to initialize the firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


