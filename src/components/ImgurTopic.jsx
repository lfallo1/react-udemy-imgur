var React = require('react');

var ImgurTopic = React.createClass({
  render : function(){

      var {imgurTopic} = this.props;

      return (
        <div className="thumbnail">
          {imgurTopic.name}
          <img src={imgurTopic.heroImage ? imgurTopic.heroImage.link : ''} alt="noimage.png" width="100px" />
        </div>
      );
  }
});

module.exports = ImgurTopic;
