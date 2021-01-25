import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDMs5Ykp2x5Ct7BDQD-uvBLeQ3zKvoN0hE',
  authDomain: 'donation-app-701b3.firebaseapp.com',
  projectId: 'donation-app-701b3',
  storageBucket: 'donation-app-701b3.appspot.com',
  messagingSenderId: '223087418909',
  appId: '1:223087418909:web:324c5830584bf32134b0f4',
  measurementId: 'G-EL702YEWXM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
