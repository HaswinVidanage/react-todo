var React = require('react');
var ReactDOM = require('react-dom');
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>Boilerplate v3 project</p>,
   document.getElementById('app')
);
