import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialiaze Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAK7xYGtmuv9AntXaWvixmUNZh8ZatKW2o",
    authDomain: "foodish-reactjs.firebaseapp.com",
    databaseURL: "https://foodish-reactjs.firebaseio.com",
    projectId: "foodish-reactjs",
    storageBucket: "",
    messagingSenderId: "632673462662",
    appId: "1:632673462662:web:8198a51ae8f558de"
  };

  firebase.initializeApp(firebaseConfig); 
  firebase.firestore()
  // .settings({ timestampsInSnapshots: false});

  export default firebase;