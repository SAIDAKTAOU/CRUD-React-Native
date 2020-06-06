import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTZ3fZgmgAuBJHtgWm4isLNKuwtVZR4KU",
    authDomain: "carnet-med-5.firebaseapp.com",
    databaseURL: "https://carnet-med-5.firebaseio.com",
    projectId: "carnet-med-5",
    storageBucket: "carnet-med-5.appspot.com",
    messagingSenderId: "121456552906",
    appId: "1:121456552906:web:1360a2a3348c23dc29fd33",
    
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

