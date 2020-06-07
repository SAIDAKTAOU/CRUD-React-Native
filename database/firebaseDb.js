import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {

            apiKey: "AIzaSyDY2OnCPOl34H1h80tJuJacsbjLAoZ_xPM",
            authDomain: "reactnativefirebase-6207f.firebaseapp.com",
            databaseURL: "https://reactnativefirebase-6207f.firebaseio.com",
            projectId: "reactnativefirebase-6207f",
            storageBucket: "reactnativefirebase-6207f.appspot.com",
            messagingSenderId: "279801457590",
            appId: "1:279801457590:web:bc7931f80879395ae76f17"
                    
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

