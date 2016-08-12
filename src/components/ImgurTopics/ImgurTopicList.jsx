var React = require('react');
var ImgurTopic = require('ImgurTopic');

var ImgurTopicList = React.createClass({

    render: function(){
        var {isLoading, topics} = this.props;

        var imgurTopicList = topics.map((topic) => {
          return (
              <ImgurTopic key={topic.id} imgurTopic={topic} />
            );
        });

        return (
          <div>
            <div className={isLoading ? "alert alert-info" : "hidden"}>Loading topics, please wait</div>
            <ul className="list-group">
              {imgurTopicList}
            </ul>
          </div>
        );
    }

});

module.exports = ImgurTopicList;
