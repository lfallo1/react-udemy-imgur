var React = require('react');
var api = require('ImgurApi');
var ImgurTopic = require('ImgurTopic');

var ImgurTopicList = React.createClass({

  getInitialState : function(){
    return {
      isLoading : false,
      data : []
    }
  },

    getTopics : function(){
      this.setState({isLoading : true});

      api.get('topics/defaults').then((response) => {
        this.setState({isLoading: false, data : response.data});
      });
    },

    render: function(){
        imgurTopicList = this.state.data.map((topic) => {
          return (
              <ImgurTopic key={topic.id} imgurTopic={topic} />
            );
        });

        return (
          <div>
            <button className={this.state.isLoading ? "hidden" : "btn btn-primary"} onClick={this.getTopics}>Load topics</button>
            <div className={this.state.isLoading ? "alert alert-info" : "hidden"}>Loading topics, please wait</div>
            {imgurTopicList}
          </div>
        );
    }

});

module.exports = ImgurTopicList;
