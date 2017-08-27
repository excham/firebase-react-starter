const React = require('react');
const ReactRouter = require('react-router');

const Routes = require('./routes');

const Navbar = require('./components/navbar');
const Footer = require('./components/footer');

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
          Routes
        )
      ),
      React.createElement(
        Footer
      )
    )
  }
}

module.exports = App;
