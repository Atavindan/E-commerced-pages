import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuv1EqwDxO6Ig8fhNnbt6fL05SONRCbsA",
    authDomain: "crwn-db-7f6ce.firebaseapp.com",
    databaseURL: "https://crwn-db-7f6ce.firebaseio.com",
    projectId: "crwn-db-7f6ce",
    storageBucket: "crwn-db-7f6ce.appspot.com",
    messagingSenderId: "1057025615068",
    appId: "1:1057025615068:web:934dec79d3e2967fad0019",
    measurementId: "G-6GNFH1HDYE"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const Provider = new firebase.auth.GoogleAuthProvider();
  Provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(Provider);

  export default firebase;