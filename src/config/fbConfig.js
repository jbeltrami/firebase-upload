import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3CoASlW2m7rBKlBPGOFU9Cj_Lyj6WLfo',
  authDomain: 'petscan-e6c83.firebaseapp.com',
  databaseURL: 'https://petscan-e6c83.firebaseio.com',
  projectId: 'petscan-e6c83',
  storageBucket: 'petscan-e6c83.appspot.com',
  messagingSenderId: '179752930229',
  appId: '1:179752930229:web:b9d1e5bc653ba45647a7fc',
  measurementId: 'G-L75XDZKJHH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

export const storage = firebase.storage();
