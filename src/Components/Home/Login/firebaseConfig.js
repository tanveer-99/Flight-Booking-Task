import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUynLy0dPd5tWB0XXKq6syGJlHfddti1o",
    authDomain: "flight-booking-85127.firebaseapp.com",
    projectId: "flight-booking-85127",
    storageBucket: "flight-booking-85127.appspot.com",
    messagingSenderId: "1094983999572",
    appId: "1:1094983999572:web:4496842ede1bb521bccdc1"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;