var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.hashHistory;

var Base = require('Base');
var ImgurTopicsPage = require('ImgurTopicsPage');
var ImgurGalleriesByTopicPage = require('ImgurGalleriesByTopicPage');
var Page2 = require('Page2');
var PageTwoSub = require('PageTwoSub');

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={ImgurTopicsPage} />
            <Route path="galleries" component={ImgurGalleriesByTopicPage} />
            <Route path="page2" component={Page2}>
              <Route path="sub" component={PageTwoSub} />
            </Route>
        </Route>
    </Router>
);

module.exports = Routes;
