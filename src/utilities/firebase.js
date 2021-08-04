import firebase from "firebase";
import "firebase/auth";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpCyO1tAU6TKk73vitjpY3pvAASl0-PyY",
  authDomain: "study-chat-for-friends.firebaseapp.com",
  projectId: "study-chat-for-friends",
  storageBucket: "study-chat-for-friends.appspot.com",
  messagingSenderId: "64227909929",
  appId: "1:64227909929:web:b9f112c3ee084fd59c9738",
});


export const db = firebaseApp.firestore();