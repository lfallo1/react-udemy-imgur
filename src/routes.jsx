var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.hashHistory;

var Base = require('Base');
var Login = require('Login');
var ImgurTopicsPage = require('ImgurTopicsPage');
var Page2 = require('Page2');
var PageTwoSub = require('PageTwoSub');
var AuthHelper = require('AuthHelper');

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={ImgurTopicsPage} />
            <Route path="login" component={Login} onEnter={AuthHelper.isAnonymous} />
            <Route path="secure" onEnter={AuthHelper.requireAuth}>
              <Route path="page2" component={Page2}>
                <Route path="sub" component={PageTwoSub} />
              </Route>
            </Route>
        </Route>
    </Router>
);

module.exports = Routes;
