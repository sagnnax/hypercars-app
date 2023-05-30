import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbNPdTewLUVEsaiRuxjX0NV_2xmBrODec",
    authDomain: "hypercars-7a271.firebaseapp.com",
    projectId: "hypercars-7a271",
    storageBucket: "hypercars-7a271.appspot.com",
    messagingSenderId: "1042272548460",
    appId: "1:1042272548460:web:449e6f330aa5d919e5ca49"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};