var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var History = require('history')
var RouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;

//disable query key in url string
var appHistory = RouterHistory(CreateHashHistory)(
    { queryKey: false }
);


var Base = require('Base');
var ImgurTopicList = require('ImgurTopicList');
var Page2 = require('Page2');
var PageTwoSub = require('PageTwoSub');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={ImgurTopicList} />
            <Route path="page2" component={Page2}>
              <Route path="sub" component={PageTwoSub} />
            </Route>
        </Route>
    </Router>
);

module.exports = Routes;
