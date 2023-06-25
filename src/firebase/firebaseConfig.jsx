import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyCJ12rgRNt2cMAZ-_n-QtCXw4ESVhwcDn8",
  authDomain: "finalproject-566f5.firebaseapp.com",
  databaseURL: "https://finalproject-566f5-default-rtdb.firebaseio.com",
  projectId: "finalproject-566f5",
  storageBucket: "finalproject-566f5.appspot.com",
  messagingSenderId: "1080620458602",
  appId: "1:1080620458602:web:aa554fb1cbe77a0924a013"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}