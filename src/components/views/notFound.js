const React = require('react');


class NotFound extends React.Component {
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
        '404 | Not Found'
      )
    )
  }
}


module.exports = NotFound;
