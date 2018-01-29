import * as firebase from 'firebase';

const config = {
  // Initialize Firebase
    apiKey: "AIzaSyCxwlmIn1OlBXZL8igfRqFAnJqMTwHzKJc",
    authDomain: "expensify-647e5.firebaseapp.com",
    databaseURL: "https://expensify-647e5.firebaseio.com",
    projectId: "expensify-647e5",
    storageBucket: "expensify-647e5.appspot.com",
    messagingSenderId: "1089912625221"

};

firebase.initializeApp(config);

const database = firebase.database();

