var React = require('react');
var Header = require('Header');

var Base = React.createClass({

    render: function(){
        return (
            <div>
                <Header />
                {this.props.children}
                <br /><hr />
                <div className="footer">
                    <h3>Footer</h3>
                </div>
            </div>
        );
    }

});

module.exports = Base;
