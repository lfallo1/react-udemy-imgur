var React = require('react');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurGalleriesByTopicPage = React.createClass({

  getInitialState : function(){
    return {'galleries' : []}
  },

  componentWillMount : function(){
    this.unsubscribe = ImgurStore.listen(this.handleChange);
    // this.getGalleries(this.props.location.query.topicId);
    this.getGalleriesByTopic();
  },

  componentWillUnmount : function(){
    this.unsubscribe();
  },

  getGalleriesByTopic : function(){
    ImgurActions.getGalleriesByTopic();
  },

  handleChange : function(event, newState){
    this.setState(newState);
  },

    render: function(){

      var getThumbnailLink = function(gallery){
        if(gallery.cover){
            return "http://i.imgur.com/" + gallery.cover + ".jpg";
        } else if(gallery.link.indexOf('.') > -1){
          return gallery.link;
        } else {
          return "http://i.imgur.com/" + gallery.id + ".jpg";
        }
      };

      var renderList = () => {
        return this.state.galleries.map((gallery)=>{
          return (
            <li className="list-group-item" key={gallery.id}>
                <div>
                  {gallery.title} - {gallery.id}
                  <img src={getThumbnailLink(gallery)} height="175px" />
                </div>
            </li>
          )
        });
      };

        return (
          <div>
            <ul className="list-group">
              {renderList()}
            </ul>
          </div>
        );
    }

});

module.exports = ImgurGalleriesByTopicPage;
