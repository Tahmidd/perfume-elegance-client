// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAtzVOjGPcmvvfdTEh1mByENGPEasVmgw",
    authDomain: "perfume-elegance.firebaseapp.com",
    projectId: "perfume-elegance",
    storageBucket: "perfume-elegance.appspot.com",
    messagingSenderId: "822959771136",
    appId: "1:822959771136:web:b0ef356d9fc497175752e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;