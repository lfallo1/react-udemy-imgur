var Reflux = require('reflux');

var ImgurActions = Reflux.createActions(['getTopics', 'getGalleriesByTopic', 'selectTopic']);

// ---- setup unnecessary hooks ------
ImgurActions.getTopics.preEmit = function(){
    console.log('pre emit of get ingredients');
};

module.exports = ImgurActions;
