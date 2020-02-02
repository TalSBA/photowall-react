import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCN3eOtrhSYGZWS0wuK7DdAhGM-m7ThP_8",
  authDomain: "photowall-13f0b.firebaseapp.com",
  databaseURL: "https://photowall-13f0b.firebaseio.com",
  projectId: "photowall-13f0b",
  storageBucket: "photowall-13f0b.appspot.com",
  messagingSenderId: "483279932786",
  appId: "1:483279932786:web:0e85a40c99d19eb90da1eb",
  measurementId: "G-ME6SV0CCXD"
};

  firebase.initializeApp(firebaseConfig)
  const database = firebase.database();
  
  export {database};