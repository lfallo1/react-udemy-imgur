var React = require('react');
var ImgurTopicList = require('ImgurTopicList');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurTopicsPage = React.createClass({

    getInitialState : function(){
      return {
        isLoading : false,
        topics : []
      }
    },

    componentWillMount : function(){
      this.unsubscribe = ImgurStore.listen(this.handleChange);
      ImgurActions.clearSelectedTopic();
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    handleChange : function(event, newState){
      this.setState(newState);
    },

    render: function(){
        return (
          <div>
            <ImgurTopicList {...this.state} />
          </div>
        );
    }

});

module.exports = ImgurTopicsPage;
