const React = require('react');
const ReactRouter = require('react-router');
const History = require('history');

const Home = require('./routes/index');
const Page = require('./routes/page');
const View = require('./routes/view');
const NotFound = require('./routes/notFound');


class Routes extends React.Component {
  constructor() {
    super()
    console.log(History);
    this.history = History.createHashHistory()
  }

  render() {
    return React.createElement(
      ReactRouter.Router,
      {history: this.history},
      React.createElement(
        ReactRouter.Switch,
        {},

        React.createElement(
          ReactRouter.Route,
          {path: '/', exact: true, component: Home}
        ),

        React.createElement(
          ReactRouter.Route,
          {path: '/page', exact: true, component: Page}
        ),

        React.createElement(
          ReactRouter.Route,
          {path: '/view/:id', exact: true, component: View}
        ),

        React.createElement(
          ReactRouter.Route,
          {path: '*', component: NotFound}
        )
      )
    )
  }
}


module.exports = Routes;
