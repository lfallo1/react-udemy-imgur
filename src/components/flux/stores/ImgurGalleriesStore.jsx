var api = require('ImgurApi');
var Reflux = require('reflux');
var ImgurGalleryActions = require('ImgurGalleryActions');

var ImgurGalleriesStore = Reflux.createStore({

  listenables : [ImgurGalleryActions],

  clearGalleries : function(){
    this.galleries = [];
    this.fireUpdate();
  },

  getGalleriesByTopic : function(topicId){
    this.clearGalleries();

    api.get('topics/' + topicId).then((response) => {
      this.galleries = response.data;
      this.fireUpdate();
    });
  },

  fireUpdate : function(){
    this.trigger('change', {'data' : this.galleries || []});
  }

});

module.exports = ImgurGalleriesStore;
