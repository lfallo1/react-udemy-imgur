var api = require('ImgurApi');
var Reflux = require('reflux');
var ImgurActions = require('ImgurActions');

var ImgurStore = Reflux.createStore({

  listenables : [ImgurActions],

  clearTopics : function(){
    this.topics = [];
    this.fireUpdate();
  },

  getTopics : function(){
    this.isLoading = true;
    this.clearTopics();
    
    api.get('topics/defaults').then((response) => {
      this.topics = response.data;
      this.isLoading = false;
      this.fireUpdate();
    });
  },

  fireUpdate : function(){
    this.trigger('change', {'data' : this.topics || [], 'isLoading' : this.isLoading});
  }

});

module.exports = ImgurStore;
