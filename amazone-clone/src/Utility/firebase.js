import firebase  from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAtMAIGzbLETOy07Atn4QntoAyf5cwaeXU",
  authDomain: "clone-d1649.firebaseapp.com",
  projectId: "clone-d1649",
  storageBucket: "clone-d1649.appspot.com",
  messagingSenderId: "577545550343",
  appId: "1:577545550343:web:a6536d2ea8a809623c88a2",
  measurementId: "G-ZVZMJ8E92B"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const db = app.firestore()