// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2mBkdbJ0MZVTbiOXe67zzp2CdDpxj7yQ",
    authDomain: "ecoomerce-49d45.firebaseapp.com",
    projectId: "ecoomerce-49d45",
    storageBucket: "ecoomerce-49d45.appspot.com",
    messagingSenderId: "63378430199",
    appId: "1:63378430199:web:7de05d537df00ab3b51bf2",
    measurementId: "G-L03F7YKFER"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  export{db, auth};