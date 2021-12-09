import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6uKeuksk652JjGp8025aCjBdfqZXvwjU",
  authDomain: "next-blog-9f4c7.firebaseapp.com",
  projectId: "next-blog-9f4c7",
  storageBucket: "next-blog-9f4c7.appspot.com",
  messagingSenderId: "595850028350",
  appId: "1:595850028350:web:0fb0a9b663fbf5560df86f",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
if(!firebase.apps.length)
	firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firestore.firestore();
export const storage = firestore.storage();