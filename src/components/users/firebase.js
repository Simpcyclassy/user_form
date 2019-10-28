import firebase from 'firebase';
// import admin from 'firebase-admin';

firebase.initializeApp({
    authDomain: 'simpcys-form.firebaseapp.com/',
    databaseURL: 'https://simpcys-firstcasts.firebaseio.com/',
});

const database = firebase.database().ref();

export default database;
