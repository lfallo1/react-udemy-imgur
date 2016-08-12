var React = require('react');
var ImgurTopic = require('ImgurTopic');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurTopicList = React.createClass({

    getInitialState : function(){
      return {
        isLoading : false,
        topics : []
      }
    },

    componentWillMount : function(){
      this.unsubscribe = ImgurStore.listen(this.handleChange);
      this.getTopics();
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    handleChange : function(event, newState){
      this.setState(newState);
    },

    getTopics : function(){
      ImgurActions.getTopics();
    },

    render: function(){
        var imgurTopicList = this.state.topics.map((topic) => {
          return (
              <ImgurTopic key={topic.id} imgurTopic={topic} />
            );
        });

        return (
          <div>
            <button className={this.state.isLoading ? "hidden" : "btn btn-primary"} onClick={this.getTopics}>Refresh topics</button>
            <div className={this.state.isLoading ? "alert alert-info" : "hidden"}>Loading topics, please wait</div>
            <ul className="list-group">
              {imgurTopicList}
            </ul>
          </div>
        );
    }

});

module.exports = ImgurTopicList;
