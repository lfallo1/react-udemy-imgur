var React = require('react');
var AuthStore = require('AuthStore');

var Page2 = React.createClass({

    getInitialState : function(){
      return {user : null};
    },

    componentWillMount : function(){
      this.setState(AuthStore.isLoggedIn());
    },

    render: function(){
        return (
          <div>
            <h2>A secure page - You are logged in as {this.state.user.username}</h2>
            <div>
              {this.props.children}
            </div>
          </div>
        );
    }

});

module.exports = Page2;
