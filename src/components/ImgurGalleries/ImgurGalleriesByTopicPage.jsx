var React = require('react');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');
var History = require('react-router').hashHistory;

var ImgurGalleriesByTopicPage = React.createClass({

    getInitialState : function(){
      return {'galleries' : [], 'galleryPage' : 0, 'isGalleryLoading' : false};
    },

    componentWillMount : function(){
      if(!this.props.routeParams.topicId){
        History.push('/');
      }
      this.unsubscribe = ImgurStore.listen(this.handleChange);
      ImgurActions.clearGalleries();
      this.getGalleriesByTopic();
    },

    componentWillUnmount : function(){
      this.unsubscribe();
    },

    getGalleriesByTopic : function(){
      ImgurActions.getGalleriesByTopic(this.props.routeParams.topicId);
    },

    getGalleriesByTopicPrevious : function(){
      ImgurActions.getGalleriesByTopic(this.props.routeParams.topicId, true);
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
              <div className="col-md-3" key={gallery.id}>
                <div className="thumbnail">
                    <a target="_blank" href={"http://imgur.com/topic/" + gallery.topic.replace(' ','_') + '/' + gallery.id}>
                      <img src={getThumbnailLink(gallery)} height="175px" />
                      <div className="caption text-center">
                        <h4>{gallery.title}</h4>
                      </div>
                    </a>
                  </div>
              </div>
          )
        });
      };

      return (
        <div>
          {showLoading()}
          <span className="badge">{"Page " + Number(this.state.galleryPage + 1)}</span>
          <button className="btn btn-primary" disabled={this.state.galleryPage < 1} onClick={this.getGalleriesByTopicPrevious}>Previous page</button>
          <button className="btn btn-primary" onClick={this.getGalleriesByTopic}>Next page</button>
          <div className="row">
            {renderList()}
          </div>
        </div>
      );
    }

});

module.exports = ImgurGalleriesByTopicPage;
