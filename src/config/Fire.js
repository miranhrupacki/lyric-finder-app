import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1qUQftPbmb88x-FE3QRdcRDoSI8c1wpU",
    authDomain: "lyric-app-32f26.firebaseapp.com",
    databaseURL: "https://lyric-app-32f26.firebaseio.com",
    projectId: "lyric-app-32f26",
    storageBucket: "lyric-app-32f26.appspot.com",
    messagingSenderId: "792154295110",
    appId: "1:792154295110:web:1ad0aa90c8541bb2eef347",
    measurementId: "G-5DTCLYX4FN"
};

const fire = firebase.initializeApp(config);
export default fire;