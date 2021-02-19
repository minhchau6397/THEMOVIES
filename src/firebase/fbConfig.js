import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9mZ8bSsiF0RX50iQml26kKihMSg9obW0",
    authDomain: "movie-app-3941d.firebaseapp.com",
    projectId: "movie-app-3941d",
    storageBucket: "movie-app-3941d.appspot.com",
    messagingSenderId: "952172227014",
    appId: "1:952172227014:web:4c79ca45ec7ab0bf80eac7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// .settings({ timestampsInSnapshots: true })

export default firebase;
