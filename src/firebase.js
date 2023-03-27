import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDm58WFzyxRdmJvsJxRjFmeR6HxdJC1hbk",
  authDomain: "fir-auth-b1db9.firebaseapp.com",
  projectId: "fir-auth-b1db9",
  storageBucket: "fir-auth-b1db9.appspot.com",
  messagingSenderId: "833167527016",
  appId: "1:833167527016:web:de522fab83112b96c6ffdd",
  measurementId: "G-S3Y4TFFB00"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};