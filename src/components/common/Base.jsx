var React = require('react');
var Header = require('Header');

var Base = React.createClass({

    render: function(){
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }

});

module.exports = Base;
