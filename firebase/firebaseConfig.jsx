// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs79c442BA8UO_T-Qy1aceu2CQGA3uIDo",
    authDomain: "bfbaied.firebaseapp.com",
    projectId: "bfbaied",
    storageBucket: "bfbaied.firebasestorage.app",
    messagingSenderId: "84790969072",
    appId: "1:84790969072:web:275dd0e4d51e18d110b835"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };