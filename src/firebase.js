import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpVAeFSCtDRicu94ROOWHg1iyr6NGAkgg",
  authDomain: "netflix-clone-63d61.firebaseapp.com",
  projectId: "netflix-clone-63d61",
  storageBucket: "netflix-clone-63d61.appspot.com",
  messagingSenderId: "129374407604",
  appId: "1:129374407604:web:0c415c98076122a4bb40e1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
