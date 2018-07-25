import firebase from 'firebase/app'
import 'firebase/database'



var config = {
    apiKey: "AIzaSyDkXBgMWz57Tc4WTZ4H310YsrqRnrXo3Ts",
    authDomain: "autprueba1.firebaseapp.com",
    databaseURL: "https://autprueba1.firebaseio.com",
    projectId: "autprueba1",
    storageBucket: "autprueba1.appspot.com",
    messagingSenderId: "507457765025"
};

var FirebaseConfig = firebase.initializeApp(config);
export default FirebaseConfig;