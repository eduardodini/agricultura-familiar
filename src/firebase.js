// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBxmQlyfEFheoBvLczJabi6YZz8_QIZ-OE",
    authDomain: "agricultura-familiar-2e997.firebaseapp.com",
    projectId: "agricultura-familiar-2e997",
    storageBucket: "agricultura-familiar-2e997.appspot.com",
    messagingSenderId: "746585506951",
    appId: "1:746585506951:web:b770643ecd1268ffe22422"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;