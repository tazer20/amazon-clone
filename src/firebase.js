import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoE6P2CA7f8KK1oD8H8GU8qz_m5WIOQz0",
    authDomain: "challenge-2c8ca.firebaseapp.com",
    projectId: "challenge-2c8ca",
    storageBucket: "challenge-2c8ca.appspot.com",
    messagingSenderId: "509299123836",
    appId: "1:509299123836:web:8f9fc8e0a0ee438f138bf9",
    measurementId: "G-90F17QHHVQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};