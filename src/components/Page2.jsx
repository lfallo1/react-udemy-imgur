var React = require('react');

var Page2 = React.createClass({

    render: function(){
        return (
          <div>
            <h2>Page 2</h2>
            <div>
              {this.props.children}
            </div>
          </div>
        );
    }

});

module.exports = Page2;
