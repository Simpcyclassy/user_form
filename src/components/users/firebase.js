import firebase from 'firebase';

firebase.initializeApp();

const database = firebase.database().ref();

export default database;
