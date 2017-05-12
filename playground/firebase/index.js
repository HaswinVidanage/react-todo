import firebase from 'firebase';
var uuid = require('node-uuid');
var moment = require('moment');

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
var firebaseRef = firebase.database().ref();
//SET

// firebaseRef.set({
//   app : {
//     appName : 'Tester App',
//     version : '1.0.0'
//   },
//   isRunning : true,
//   user : {
//     name : 'Haswin',
//     age : 22,
//     createdAt : moment().unix()
//   }
// }).then( () => {
//   console.log('Set Worked !');
// }, (e) => {
//   console.log('Set Failed !')
// });
//
// firebaseRef.child('app').set({
//   appName : 'App Name 3'
// });

//UDDATE


firebaseRef.set({
  app : {
    appName : 'Tester App',
    version : '1.0.0'
  },
  isRunning : true,
  user : {
    name : 'Haswin',
    age : 22,
    createdAt : moment().unix()
  }
});

// firebaseRef.update({
//     isRunning: false,
//     'app/appName' : 'Tester App Updated'
// });
//
// firebaseRef.child('app').update({
//   appName : 'Update 3'
// }).then(() => {
//   console.log('Update worked !');
// }, (e) => {
//   console.log('Update failed !');
// });

//Update
firebaseRef.update({
  'app/appName' : 'update 4',
  'user/name' : 'Kasun'
})

firebaseRef.child('app').update({
  appName : 'update 5'
});

firebaseRef.child('user').update({
  name : 'Hash'
});

// Remove
// firebaseRef.remove();
// firebaseRef.child('app/appName').remove();
//
// firebaseRef.child('app').update({
//   version : '2.0',
//   name : 'null'
// });

//Read
// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// })


//keep listening to database changes or keep reading

// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// };
// // firebaseRef.on('value', logData);
// //
// // //you can unlisten to on database changes
// // firebaseRef.off();
// //
// // firebaseRef.update({isRunning : false});



// firebaseRef.child('user').on('value', logData);
// firebaseRef.child('user').update({name : 'mike'});
// firebaseRef.child('app').update({appName : 'My App'});

// //working with arrays
// var notesRef = firebaseRef.child('notes');
// // var newNotesRef = notesRef.push();
// // newNotesRef.set({
// //   text : 'walk the dog'
// // });
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added !', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed !', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed !', snapshot.key, snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text : 'walk the dog'
// });
//
// console.log('Todo_id', newNotesRef.key);

//challenge
//#1 create a variable that draws reference to todos array
//#2 create a child added listener when children get added, and when they do simply print the key and value to the screen
//#3 Add 2 todos to the arrays i.e call push passing in the text property

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo got added !', snapshot.key, snapshot.val());
});

todosRef.push({
  text : 'buy number 1'
});

todosRef.push({
  text : 'buy number 2'
});
