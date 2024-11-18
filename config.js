// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Sk-iIBymhbT5_IgzoodV88RpwTkuJTA",
  authDomain: "newfantasy-9673f.firebaseapp.com",
  projectId: "newfantasy-9673f",
  storageBucket: "newfantasy-9673f.appspot.com",
  messagingSenderId: "672766432107",
  appId: "1:672766432107:web:bd68a2d666620692df322e",
  measurementId: "G-QHKKESQYEK"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fsdatabase = getFirestore(app);
export {app, analytics, fsdatabase}