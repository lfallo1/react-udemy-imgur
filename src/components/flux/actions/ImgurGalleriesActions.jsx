var Reflux = require('reflux');

var ImgurGalleriesActions = Reflux.createActions(['getGalleriesByTopic']);

// ---- setup unnecessary hooks ------
ImgurActions.getGalleriesByTopic.preEmit = function(){
    console.log('pre emit of get ingredients');
};

module.exports = ImgurGalleriesActions;
