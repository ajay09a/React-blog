import firebase from 'firebase/app';
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5jUn9Hh32CMuJD4wSijtpEwpWwmTtsTs",
  authDomain: "react-hook-blogs.firebaseapp.com",
  projectId: "react-hook-blogs",
  storageBucket: "react-hook-blogs.appspot.com",
  messagingSenderId: "64903527309",
  appId: "1:64903527309:web:7d3978ca6ac76f408d9bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const firestore = firebase.firestore();