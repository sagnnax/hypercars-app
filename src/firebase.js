// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbNPdTewLUVEsaiRuxjX0NV_2xmBrODec",
    authDomain: "hypercars-7a271.firebaseapp.com",
    projectId: "hypercars-7a271",
    storageBucket: "hypercars-7a271.appspot.com",
    messagingSenderId: "1042272548460",
    appId: "1:1042272548460:web:449e6f330aa5d919e5ca49"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
export {
    storage, firestore as default
}