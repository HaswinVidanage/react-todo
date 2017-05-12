import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAxDrfde5RCHUYjELuw7-GwQEBqa1SuYcs",
      authDomain: "hd-todo-app.firebaseapp.com",
      databaseURL: "https://hd-todo-app.firebaseio.com",
      projectId: "hd-todo-app",
      storageBucket: "hd-todo-app.appspot.com",
      messagingSenderId: "705614364887"
    };
    firebase.initializeApp(config);
} catch (e) {

} finally {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
