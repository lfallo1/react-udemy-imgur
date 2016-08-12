var React = require('react');
var Link = require('react-router').Link;

var ImgurTopic = React.createClass({
  render : function(){

      var {imgurTopic} = this.props;

      var link = 'galleries/' + imgurTopic.id;
      return (
        <li className="list-group-item">
          <Link to={link}>
            <h4>{imgurTopic.name} - {imgurTopic.id}</h4>
            <p><small>{imgurTopic.description}</small></p>
          </Link>
        </li>
      );
  }
});

module.exports = ImgurTopic;
