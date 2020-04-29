var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

var TodoComponent = createReactClass ({
  render:function(){
    return(
      <h1>{this.props.header}</h1>
    );
  }
});

ReactDom.render(<TodoComponent header="hi"/>, document.getElementById('todo-wrapper'))