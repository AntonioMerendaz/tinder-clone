import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASk-2TIT2A7Euerp9aqq4WEIxpPagdX2U",
  authDomain: "tinder-clone-c1a91.firebaseapp.com",
  databaseURL: "https://tinder-clone-c1a91.firebaseio.com",
  projectId: "tinder-clone-c1a91",
  storageBucket: "tinder-clone-c1a91.appspot.com",
  messagingSenderId: "411199039236",
  appId: "1:411199039236:web:17293a9b2498523456d251",
  measurementId: "G-5KRNY5TFDF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
