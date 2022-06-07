// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuL_ZuhqRFR6tUjTv2jI6V3nhQs2mBLFQ",
    authDomain: "get-a-loan-dd58d.firebaseapp.com",
    projectId: "get-a-loan-dd58d",
    storageBucket: "get-a-loan-dd58d.appspot.com",
    messagingSenderId: "594992937788",
    appId: "1:594992937788:web:a5fc6c1edbb4df98983c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;