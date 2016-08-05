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

var imgurSecret = 'bb5737bebca1794c83224a1b889e97f801dfe3f9';
var imgurClientId = 'b14aab91734a013';

//get all topics
// https://api.imgur.com/3/topics/defaults

//get list of galleries by topic
// https://api.imgur.com/3/topics/{topic_id}/{sort}/{page}

//get specific gallery information
// https://api.imgur.com/3/topics/{topic_id}/{item_id}

//comments by image
//https://api.imgur.com/3/gallery/image/zn7O7QW/comments/top
//https://api.imgur.com/3/gallery/album/{id}/comments/{sort}


var Base = require('Base');
var Page1 = require('Page1');
var Page2 = require('Page2');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={Page1} />
            <Route path="page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;
