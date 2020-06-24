import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAUxQUjD0_GbIP4_hgPmLUT3odXmgN-oYk",
  authDomain: "ihorizon.firebaseapp.com",
  databaseURL: "https://ihorizon.firebaseio.com",
  projectId: "ihorizon",
  storageBucket: "ihorizon.appspot.com",
  messagingSenderId: "505012945734",
  appId: "1:505012945734:web:97f40065cd8738aa185b47",
  measurementId: "G-54656VVPP6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
