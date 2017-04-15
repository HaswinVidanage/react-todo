var React = require('react');

var AddTodo = React.createClass({
  handleSubmit : function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = "";
      this.props.onSetNewTodo(todoText);
    } else{
      this.refs.todoText.focus();
    }

  },
  render : function (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do ?"/>
          <button className="expanded button">Add</button>
        </form>
      </div>
    );
  }
});

module.exports =  AddTodo;
