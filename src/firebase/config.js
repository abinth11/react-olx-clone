import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHDCXkjISDAkzahEUf3V6fbx5F4c9QiA",
  authDomain: "react-olx-clone-8ce22.firebaseapp.com",
  projectId: "react-olx-clone-8ce22",
  storageBucket: "react-olx-clone-8ce22.appspot.com",
  messagingSenderId: "61077268684",
  appId: "1:61077268684:web:9a74a1740c2cd2ecc3ba69",
  measurementId: "G-5T028MSKP9"
};

export default firebase.initializeApp(firebaseConfig)