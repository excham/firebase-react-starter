const React = require('react');


class View extends React.Component {
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
        'Viewing item: ',
        this.props.match.params.id
      )
    )
  }
}


module.exports = View;
