var React = require('react');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');
var Link = require('react-router').Link;

var Header = React.createClass({

    getInitialState : function(){
      return {'selectedTopic' : null}
    },

    componentWillMount : function(){
      this.unsubscribe = ImgurStore.listen(this.handleChange);
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    handleChange : function(event, newState){
      this.setState(newState);
    },

    render: function(){
      var selectedTopic = this.state.selectedTopic || '';
      return (
        <div>
          <h4>{selectedTopic}</h4>
          <ul className="nav nav-tabs">
              <li role="presentation"><Link to="/">Home</Link></li>
              <li role="presentation"><Link to="/page2">About</Link></li>
          </ul>
        </div>
      );
    }

});

module.exports = Header;
