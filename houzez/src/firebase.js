// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm1MvK_zgbTsgX62P4PcxumXoCiae-poE",
  authDomain: "houzehiveproject.firebaseapp.com",
  projectId: "houzehiveproject",
  storageBucket: "houzehiveproject.appspot.com",
  messagingSenderId: "548462975246",
  appId: "1:548462975246:web:78427f298ad7561f2a5f5f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
