var React = require('react');

var ImgurTopic = React.createClass({
  render : function(){

      var {imgurTopic} = this.props;

      return (
        <li className="list-group-item">
          {imgurTopic.name} - {imgurTopic.description}
          <img src={imgurTopic.heroImage ? imgurTopic.heroImage.link : ''} alt="noimage.png" width="100px" />
        </li>
      );
  }
});

module.exports = ImgurTopic;
