const React = require('react');
const ReactDom = require('react-dom');

const App = require('./app');

ReactDom.render(
  React.createElement(
    App
  ),
  document.getElementById('app')
)
