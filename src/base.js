import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDfEYpa7syvycpEC9UjaSheLvWGPImSg0E",
    authDomain: "catch-of-the-day-9dad2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-9dad2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;