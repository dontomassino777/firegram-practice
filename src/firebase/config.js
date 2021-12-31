// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5FPB8fiBUYjZC7tmu36BBxug0g9TLo9c",
  authDomain: "ninja-firegram-codealong.firebaseapp.com",
  projectId: "ninja-firegram-codealong",
  storageBucket: "ninja-firegram-codealong.appspot.com",
  messagingSenderId: "884351620161",
  appId: "1:884351620161:web:1fa2f7c520a7b4f5fe22c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
