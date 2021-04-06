import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBe1-Qb-YdEctTi9dJ8xDB8scl55T8kkjs",
    authDomain: "chat-application-c8608.firebaseapp.com",
    databaseURL: "https://chat-application-c8608-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();