// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmz0ybGy_CoEgvL02M0t0qfCOWatSw2fU",
  authDomain: "planes-9f42c.firebaseapp.com",
  projectId: "planes-9f42c",
  storageBucket: "planes-9f42c.appspot.com",
  messagingSenderId: "1019876651167",
  appId: "1:1019876651167:web:41ca34dab779e1d967b2aa",
  measurementId: "G-SSK4CK9YZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const getFirebase = () => {return app}

