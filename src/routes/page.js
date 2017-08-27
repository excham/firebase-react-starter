const React = require('react');


class Page extends React.Component {
  constructor() {
    super()
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      React.createElement(
        'h2',
        {className: 'title is-2'},
        'Welcome to my page!'
      )
    )
  }
}


module.exports = Page;
