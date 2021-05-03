import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-M3Nr2_Qa70uWIs5Hp-lnrga6CukA8N0",
    authDomain: "cov19-help.firebaseapp.com",
    databaseURL: "https://cov19-help-default-rtdb.firebaseio.com",
    projectId: "cov19-help",
    storageBucket: "cov19-help.appspot.com",
    messagingSenderId: "676169335180",
    appId: "1:676169335180:web:aa47266fbf61b2b5b396a9",
    measurementId: "G-7GD0PV0D35"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();

  export {db};