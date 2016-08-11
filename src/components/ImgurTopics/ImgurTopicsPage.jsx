var React = require('react');
var ImgurTopicList = require('ImgurTopicList');
var ImgurStore = require('ImgurStore');
var ImgurActions = require('ImgurActions');

var ImgurTopicsPage = React.createClass({

    render: function(){
        return (
          <div>
            <ImgurTopicList />
          </div>
        );
    }

});

module.exports = ImgurTopicsPage;
