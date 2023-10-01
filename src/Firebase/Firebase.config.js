// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    authDomain: "react-module51-firebase.firebaseapp.com",
    projectId: "react-module51-firebase",
    storageBucket: "react-module51-firebase.appspot.com",
    messagingSenderId: "136794996297",
    appId: "1:136794996297:web:75f5312e691f5b2deac998",
    apiKey: "AIzaSyAxn0nAJzd7hPnJ1pXU-j-FoB4j8d7bcVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;