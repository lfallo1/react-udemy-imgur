var React = require('react');
var ImgurGalleriesStore = require('ImgurGalleriesStore');
var ImgurGalleriesActions = require('ImgurGalleriesActions');

var ImgurTopicsPage = React.createClass({

  getInitialState : function(){
    return {'galleries' : []}
  },

  componentWillMount : function(){
    this.unsubscribe = ImgurGalleriesStore.listen(this.handleChange);

    //todo get query param
    this.getGalleries(5);
  },

  componentWillUnmount : function(){
    this.unsubscribe();
  },

  getGalleries : function(topicId){

  },

  handleChange : function(event, data){
    this.setState(data);
  },

    render: function(){
        return (
          <div>

          </div>
        );
    }

});

module.exports = ImgurTopicsPage;
