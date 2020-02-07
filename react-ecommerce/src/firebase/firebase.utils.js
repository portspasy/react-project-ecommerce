import firebase from "firebase/app";

// for the database
import "firebase/firestore";
// for the authentication
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6ypIeS4mMT170mt6ick2BNadUZ35VS1M",
  authDomain: "react-ecommerce-db-3taodb3.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-3taodb3.firebaseio.com",
  projectId: "react-ecommerce-db-3taodb3",
  storageBucket: "react-ecommerce-db-3taodb3.appspot.com",
  messagingSenderId: "141359905145",
  appId: "1:141359905145:web:3187eddef6706aea7397a8",
  measurementId: "G-EHH1L9BZD1"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  // when the user is Sign In
  if (!userAuth) return;

  // storing userAuth uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // give us an "exists" property wich is boolian!
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    // when is created
    const createdAt = new Date();
    console.log(displayName);
    console.log(email);
    console.log(createdAt);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
};

// to initialize the firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
