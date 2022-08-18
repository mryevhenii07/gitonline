import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; ///ex
// import 'firebase/firestore';
// import 'firebase/auth';
// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); ///ex

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
