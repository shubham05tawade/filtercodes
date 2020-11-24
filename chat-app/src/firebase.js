import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOvMebOeJj8rEiJOlPQHR6qtCebtofmZY",
    authDomain: "chat-app-88ef7.firebaseapp.com",
    databaseURL: "https://chat-app-88ef7.firebaseio.com",
    projectId: "chat-app-88ef7",
    storageBucket: "chat-app-88ef7.appspot.com",
    messagingSenderId: "852026194682",
    appId: "1:852026194682:web:f5c63fb8f81aff241be743",
    measurementId: "G-YJJ1SWD9DB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
