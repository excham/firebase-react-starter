const React = require('react');

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return React.createElement(
      'footer',
      {className: 'footer'},
      React.createElement(
        'div',
        {className: 'container'},
        'Footer content'
      )
    )
  }
}

module.exports = Footer;
