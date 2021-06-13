import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyca1JDA11Ll-D_E6NUd3efw3a6xv-LPo",
    authDomain: "hope-react.firebaseapp.com",
    databaseURL: "https://hope-react-default-rtdb.firebaseio.com",
    projectId: "hope-react",
    storageBucket: "hope-react.appspot.com",
    messagingSenderId: "669660929036",
    appId: "1:669660929036:web:1df6abd572a3663c586229",
    measurementId: "G-F5KB48JHRT"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;