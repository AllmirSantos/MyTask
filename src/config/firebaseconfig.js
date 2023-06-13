import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBDmdmhi4az5FGdmkeA64BP-sVRFM7cPzg',

  authDomain: 'task-437a6.firebaseapp.com',

  projectId: 'task-437a6',

  storageBucket: 'task-437a6.appspot.com',

  messagingSenderId: '24660122638',

  appId: '1:24660122638:web:c232a58d3497229921f05f',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestone();
export default database;
