var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


store.dispatch(actions.startAddTodos());


//Load foundation
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store} >
    <TodoApp/>
  </Provider>,
   document.getElementById('app')
);
