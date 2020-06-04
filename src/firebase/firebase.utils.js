import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDj1Le5Pn8g49oPgDud96ky7JOGgSxGHAo",
    authDomain: "crwn-db-5eb35.firebaseapp.com",
    databaseURL: "https://crwn-db-5eb35.firebaseio.com",
    projectId: "crwn-db-5eb35",
    storageBucket: "crwn-db-5eb35.appspot.com",
    messagingSenderId: "353096987610",
    appId: "1:353096987610:web:aadbf288b6ebda8382c6e3",
    measurementId: "G-WPHWN75S2P"
};

firebase.initializeApp(config);
    

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;