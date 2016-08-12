var api = require('ImgurApi');
var Reflux = require('reflux');
var ImgurActions = require('ImgurActions');

var ImgurStore = Reflux.createStore({

  imgur : {},

  listenables : [ImgurActions],

  //private - not exposed via imgur actions
  clearTopics : function(){
    this.imgur.topics = [];
    this.fireUpdate();
  },

  //public - expoed in imgur actions
  getTopics : function(){
    this.imgur.isLoading = true;
    this.clearTopics();

    api.get('topics/defaults').then((response) => {
      this.imgur.topics = response.data;
      this.imgur.isLoading = false;
      this.fireUpdate();
    });
  },

  getGalleriesByTopic : function(topicId, previousPage){
    this.imgur.isGalleryLoading = true;
    this.imgur.galleryPage = previousPage ? Math.max(0,(this.imgur.galleryPage-1)) : (this.imgur.galleryPage + 1);
    this.imgur.galleries = [];
    this.fireUpdate();

    api.get('topics/' + topicId + '/viral/' + this.imgur.galleryPage).then((response) => {
      this.imgur.isGalleryLoading = false;
      this.imgur.galleries = response.data;
      this.fireUpdate();
    });
  },

  clearGalleries : function(){
    this.imgur.galleries = [];
    this.imgur.galleryPage = -1;
    this.fireUpdate();
  },

  fireUpdate : function(){
    this.trigger('change', {
      'topics' : this.imgur.topics || [],
      'galleries' : this.imgur.galleries || [],
      'galleryPage' : this.imgur.galleryPage,
      'isLoading' : this.imgur.isLoading,
      'isGalleryLoading' : this.imgur.isGalleryLoading
    });
  }

});

module.exports = ImgurStore;
