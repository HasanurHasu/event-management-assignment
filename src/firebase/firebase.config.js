// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDChJqAk3mrk4MtEljAoM3IBXJAHtre3wo",
  authDomain: "event-management-f120d.firebaseapp.com",
  projectId: "event-management-f120d",
  storageBucket: "event-management-f120d.appspot.com",
  messagingSenderId: "395892825089",
  appId: "1:395892825089:web:cae8ff90b0635e0ea5f400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;