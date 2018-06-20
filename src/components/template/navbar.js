const React = require('react');

class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return React.createElement(
      'nav',
      {className: 'navbar'},
      React.createElement(
        'div',
        {className: 'navbar-brand'},
        React.createElement(
          'a',
          {className: 'navbar-item', href: '#/'},
          'Home'
        )
      ),
      React.createElement(
        'a',
        {className: 'navbar-item', href: '#/page'},
        'Page'
      ),
      React.createElement(
        'a',
        {className: 'navbar-item', href: '#/view/1'},
        'View 1'
      ),
      React.createElement(
        'a',
        {className: 'navbar-item', href: '#/view/2'},
        'View 2'
      ),
      React.createElement(
        'a',
        {className: 'navbar-item', href: '#/whoops'},
        '404'
      )
    )
  }
}

module.exports = Navbar;
