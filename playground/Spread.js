// // SPREAD OPERATOR
//
// //EX 01
// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,4))
//
// var toAdd =[3,4];
// console.log(add(...toAdd));
//
// //EX02
//
// var groupA = ['Haswin', 'Kasun'];
// var groupB = ['Dinuka'];
// var final = [...groupB,3,...groupA];
//
// console.log(final);


//EX 03

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name,age){
  console.log(`Hi ${name}, you are ${age} years old.`);
}


greet(...person);
greet(...personTwo);

//EX 04


var names  = ['Mike','Ben'];
var final  = ['Haswin'];

var final = ['Haswin', ...names];

final.forEach(function(name){
  console.log(`Hi ${name} !`);
});
// console.log(final);
