import firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyC1qUQftPbmb88x-FE3QRdcRDoSI8c1wpU",
    // authDomain: "lyric-app-32f26.firebaseapp.com",
    // databaseURL: "https://lyric-app-32f26.firebaseio.com",
    // projectId: "lyric-app-32f26",
    // storageBucket: "lyric-app-32f26.appspot.com",
    // messagingSenderId: "792154295110",
    // appId: "1:792154295110:web:1ad0aa90c8541bb2eef347",
    // measurementId: "G-5DTCLYX4FN"
    apiKey: "AIzaSyDgC6QE3QwlAwwB6irBpZIBnwC2-wge-24",
    authDomain: "lyric-app-10c1c.firebaseapp.com",
    databaseURL: "https://lyric-app-10c1c.firebaseio.com",
    projectId: "lyric-app-10c1c",
    storageBucket: "lyric-app-10c1c.appspot.com",
    messagingSenderId: "85797055944",
    appId: "1:85797055944:web:061c940887d6c64442a4fd"
};

const fire = firebase.initializeApp(config);
export default fire;