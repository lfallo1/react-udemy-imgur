var React = require('react');
var AuthStore = require('AuthStore');
var ReactRouter = require('react-router');
var History = ReactRouter.hashHistory;

var Login = React.createClass({

    login : function(){
      AuthStore.login();
      var redirectUrl = this.props.location.query ? this.props.location.query.next : '/secure/page2';
      History.push(redirectUrl);
    },

    render: function(){
        return (
          <div>
            <form>
              <input className="form-control" type="text" placeholder="username" />
              <input className="form-control" type="password" placeholder="password" />
              <button className="btn btn-primary" type="button" onClick={this.login}>Submit</button>
            </form>
          </div>
        );
    }

});

module.exports = Login;
