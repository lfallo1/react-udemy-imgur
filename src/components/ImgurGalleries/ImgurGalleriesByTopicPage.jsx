var React = require('react');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurGalleriesByTopicPage = React.createClass({

    getInitialState : function(){
      return {'galleries' : [], 'galleryPage' : 0, 'isGalleryLoading' : false};
    },

    componentWillMount : function(){
      this.unsubscribe = ImgurStore.listen(this.handleChange);
      ImgurActions.clearGalleries();
      this.getGalleriesByTopic();
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    getGalleriesByTopic : function(){
      ImgurActions.getGalleriesByTopic(this.props.location.query.topicId);
    },

    getGalleriesByTopicPrevious : function(){
      ImgurActions.getGalleriesByTopic(this.props.location.query.topicId, true);
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

      var showLoading = () => {
        if(this.state.isGalleryLoading){
          return (
            <div className="alert alert-info">Loading ...</div>
          );
        }
      };

      var renderList = () => {
        return this.state.galleries.map((gallery)=>{
          return (
              <li className="list-group-item" key={gallery.id}>
                  <div>
                    {gallery.title}
                    <a target="_blank" href={"http://imgur.com/topic/" + gallery.topic.replace(' ','_') + '/' + gallery.id}><img src={getThumbnailLink(gallery)} height="175px" /></a>
                  </div>
              </li>
          )
        });
      };

      return (
        <div>
          {showLoading()}
          <span className="badge">{"Page " + Number(this.state.galleryPage + 1)}</span>
          <button className="btn btn-primary" disabled={this.state.galleryPage < 1} onClick={this.getGalleriesByTopicPrevious}>Previous page</button>
          <button className="btn btn-primary" onClick={this.getGalleriesByTopic}>Next page</button>
          <ul className="list-group">
            {renderList()}
          </ul>
        </div>
      );
    }

});

module.exports = ImgurGalleriesByTopicPage;
