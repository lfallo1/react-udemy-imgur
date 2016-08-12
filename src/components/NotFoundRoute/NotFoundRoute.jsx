var React = require('react');
var Link = require('react-router').Link;

var Page2 = React.createClass({

    render: function(){
        return (
          <div className="alert alert-danger">
            <h2>404</h2>
            <p>Bummer! Cannot seem to find that page</p>
            <Link to="/">Go back home</Link>
          </div>
        );
    }
    
});

module.exports = Page2;
