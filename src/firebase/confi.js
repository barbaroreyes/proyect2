 import * as  firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCT_73cFZyHtDb2FhEwlMb_M7ABxJ83zZw",
    authDomain: "nd-ga-a8dca.firebaseapp.com",
    projectId: "nd-ga-a8dca",
    storageBucket: "nd-ga-a8dca.appspot.com",
    messagingSenderId: "1020865931318",
    appId: "1:1020865931318:web:f7f3a044857f76c5021097",
    measurementId: "G-42ZZQDQBY2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  export {projectStorage,projectFirestore}