// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5SleStjy53Dkz-sqze715XbnINyclJc4",
  authDomain: "blog-6621e.firebaseapp.com",
  projectId: "blog-6621e",
  storageBucket: "blog-6621e.appspot.com",
  messagingSenderId: "58509506456",
  appId: "1:58509506456:web:31f3217aa6f43d155d5ded",
  measurementId: "G-L4Z3YZXBDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();