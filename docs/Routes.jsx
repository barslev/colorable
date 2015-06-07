
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Redirect = Router.Redirect
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var Demos = require('./components/Demos.jsx')
var TextDemo = require('./components/TextDemo.jsx')
var MatrixDemo = require('./components/MatrixDemo.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='demos' handler={Demos} />
    <Route path='demos/text' handler={TextDemo} />
    <Route path='demos/matrix' handler={MatrixDemo} />
    <Route path='/colorable/' name='home' handler={Index}>
      <Route path='demos' name='demos' handler={Demos} />
      <Route path='demos/text' name='text' handler={TextDemo} />
      <Route path='demos/matrix' name='matrix' handler={MatrixDemo} />
    </Route>
    <Redirect from='/colorable/demos/' to='/colorable/demos' />
    <Redirect from='/colorable/demos/text/' to='/colorable/demos/text' />
    <Redirect from='/colorable/demos/matrix/' to='/colorable/demos/matrix' />
  </Route>
)

module.exports = Routes

