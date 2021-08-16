import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAsRXkp2-KqpCI-ek1VAc-TK4290IYK37c",
    authDomain: "wily-app-dcc3e.firebaseapp.com",
    projectId: "wily-app-dcc3e",
    storageBucket: "wily-app-dcc3e.appspot.com",
    messagingSenderId: "262110516058",
    appId: "1:262110516058:web:994bf2621b017d05b81963"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();