var ReactDOM = require('react-dom');
var React = require('react');

var Root = require('./components/root.jsx');
//var Dispatcher = require('./dispatchers/dispatcher.jsx');
//var Store = require('./stores/store.jsx');

var element = React.createElement('div',null,'LOL');
ReactDOM.render(<Root />, document.getElementById('cursuum'));

//React.render(<Root />, document.body);

// Below is only dev/testing things.
// To be commented out or erased in production.
//var dropdown = require('./test.jsx');
