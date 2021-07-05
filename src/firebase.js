// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCy4lrJuesoFsZN9niyGsavB2wnSe25GEA",
  authDomain: "fir-a07cc.firebaseapp.com",
  projectId: "fir-a07cc",
  storageBucket: "fir-a07cc.appspot.com",
  messagingSenderId: "830489207543",
  appId: "1:830489207543:web:632d5f2004b6a7c318a9f2",
  measurementId: "G-9GQ95HBZ5C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };