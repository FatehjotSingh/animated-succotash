import firebase from 'firebase'
require('@firebase/firestore')

 const firebaseConfig = {
    apiKey: "AIzaSyC_Qvu--SxAqAEMQcR_tKVqic8yspYc92g",
    authDomain: "booksanta-d5034.firebaseapp.com",
    projectId: "booksanta-d5034",
    storageBucket: "booksanta-d5034.appspot.com",
    messagingSenderId: "1081835520139",
    databaseURL: "https://book-santa-d5034.firebaseio.com",
    appId: "1:1081835520139:web:26dfe29e998b744256148e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
  