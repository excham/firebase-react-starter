const React = require('react');
const ReactRouter = require('react-router');

const Router = require('./router');

const Navbar = require('./template/navbar');
const Footer = require('./template/footer');

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return React.createElement(
      'div',
      {className: 'app-container'},
      React.createElement(
        'div',
        {className: 'content-container'},
        React.createElement(
          Navbar
        ),
        React.createElement(
          'div',
          {className: 'container'},
          React.createElement(
            Router
          )
        )
      ),
      React.createElement(
        Footer
      )
    )
  }
}

module.exports = App;
