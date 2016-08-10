var React = require('react');
var ImgurTopicList = require('ImgurTopicList');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurTopicsPage = React.createClass({

    getInitialState : function(){
      return {
        data : []
      }
    },

    componentWillMount : function(){
      this.unsubscribe = ImgurStore.listen(this.handleChange);
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    handleChange : function(event, newState){
      this.setState({data : newState.data});
    },

    render: function(){
        return (
          <div>
            <div className="badge">{this.state.data.length}</div>
            <ImgurTopicList />
          </div>
        );
    }

});

module.exports = ImgurTopicsPage;
