var Fetch = require('whatwg-fetch');

var imgurSecret = 'bb5737bebca1794c83224a1b889e97f801dfe3f9';
var imgurClientId = 'b14aab91734a013';
var rootUrl = 'https://api.imgur.com/3/';

//get all topics
// https://api.imgur.com/3/topics/defaults

//get list of galleries by topic
// https://api.imgur.com/3/topics/{topic_id}/{sort}/{page}

//get specific gallery information
// https://api.imgur.com/3/topics/{topic_id}/{item_id}

//comments by image
//https://api.imgur.com/3/gallery/image/zn7O7QW/comments/top
//https://api.imgur.com/3/gallery/album/{id}/comments/{sort}

module.exports = {
  'get' : function(url){
    return fetch(rootUrl + url,{
      headers : {
        'Authorization': 'Client-ID ' + imgurClientId
      }
    }).then(function(response){
      return response.json();
    });
  }
}
