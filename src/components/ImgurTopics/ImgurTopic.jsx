var React = require('react');
var ReactRouter = require('react-router');
var ImgurActions = require('ImgurActions');
var History = ReactRouter.hashHistory;

var ImgurTopic = React.createClass({

  viewGalleries : function(){
    // History.push('/galleries?topicId=' + this.props.imgurTopic.id);
    ImgurActions.selectTopic(this.props.imgurTopic.id);
    History.push('/galleries');
  },

  render : function(){

      var {imgurTopic} = this.props;

      //<img src={imgurTopic.heroImage ? imgurTopic.heroImage.link : ''} alt="noimage.png" width="100px" />

      return (
        <li className="list-group-item" onClick={this.viewGalleries}>
          <h4>{imgurTopic.name} - {imgurTopic.id}</h4>
          <p><small>{imgurTopic.description}</small></p>
        </li>
      );
  }
});

module.exports = ImgurTopic;
