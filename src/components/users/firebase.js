import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDFX0OHjGfAf-IBgR_iRigF9YoKLrJ-J70',
    appId: '1:206722070498:web:8e356ed1ea214e89a46bbb',
    authDomain: 'simpcys-firstcasts.firebaseapp.com',
    databaseURL: 'https://simpcys-firstcasts.firebaseio.com',
    measurementId: 'G-MY7TVW4X39',
    messagingSenderId: '206722070498',
    projectId: 'simpcys-firstcasts',
    storageBucket: 'simpcys-firstcasts.appspot.com',
};

export default firebase.initializeApp(firebaseConfig);
