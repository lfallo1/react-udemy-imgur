var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({

    render: function(){
        return (
            <ul className="nav nav-tabs">
                <li role="presentation"><Link to="/">Page 1</Link></li>
                <li role="presentation"><Link to="/page2">Page 2</Link></li>
            </ul>
        );
    }

});

module.exports = Header;
