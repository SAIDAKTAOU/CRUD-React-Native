import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
            apiKey: "AIzaSyAPq3RSiPA49OtvnUIjskf3MbmOYrU8ND8",
            authDomain: "reactnativefirebase-e8167.firebaseapp.com",
            databaseURL: "https://reactnativefirebase-e8167.firebaseio.com",
            projectId: "reactnativefirebase-e8167",
            storageBucket: "reactnativefirebase-e8167.appspot.com",
            messagingSenderId: "311824298318",
            appId: "1:311824298318:web:45bd91fd201beead996e1f"
            
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

