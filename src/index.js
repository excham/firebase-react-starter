require('./styles/bulma.min.css');

const React = require('react');
const ReactDom = require('react-dom');

const App = require('./components/app');

ReactDom.render(
  React.createElement(
    App
  ),
  document.getElementById('app')
)
