const React = require('react');


class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return React.createElement(
      'div',
      {className: 'container'},
      React.createElement(
        'h1',
        {className: 'title is-1'},
        'Welcome!'
      )
    )
  }
}


module.exports = Home;
