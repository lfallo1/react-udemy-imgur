var api = require('ImgurApi');
var Reflux = require('reflux');
var ImgurActions = require('ImgurActions');

var ImgurStore = Reflux.createStore({

  imgur : {},

  listenables : [ImgurActions],

  clearTopics : function(){
    this.imgur.topics = [];
    this.fireUpdate();
  },

  clearGalleries : function(){
    this.imgur.galleries = [];
    this.fireUpdate();
  },

  getTopics : function(){
    this.imgur.isLoading = true;
    this.clearTopics();

    api.get('topics/defaults').then((response) => {
      this.imgur.topics = response.data;
      this.imgur.isLoading = false;
      this.fireUpdate();
    });
  },

  selectTopic : function(topicId){
    this.clearGalleries();
    this.imgur.selectedTopicId = topicId;
    this.fireUpdate();
  },

  getGalleriesByTopic : function(){
    api.get('topics/' + this.imgur.selectedTopicId).then((response) => {
      this.imgur.galleries = response.data;
      this.fireUpdate();
    });
  },

  fireUpdate : function(){
    this.trigger('change', {
      'topics' : this.imgur.topics || [],
      'isLoading' : this.imgur.isLoading,
      'galleries' : this.imgur.galleries || []
    });
  }

});

module.exports = ImgurStore;
