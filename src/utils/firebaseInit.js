import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBm6hU7GPURD4QXcSGjnI_cootGsiHpDyQ",
    authDomain: "anime-957fa.firebaseapp.com",
    projectId: "anime-957fa",
    storageBucket: "anime-957fa.appspot.com",
    messagingSenderId: "72682427445",
    appId: "1:72682427445:web:be12db29f1b5172acb4d7c",
    measurementId: "G-JVF1BP7Z56"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const firestore = firebase.firestore();
export { firestore };