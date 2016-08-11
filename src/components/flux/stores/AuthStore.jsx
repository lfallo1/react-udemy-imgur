var Reflux = require('reflux');

var AuthStore = Reflux.createStore({

  init : function(){
    this.user = null;
  },

  isLoggedIn : function(){
    // return this.user;
    return this.user;
  },

  login : function(){
    this.user = {"user" :
      {
        "username" : 'lfallo1',
        "role" : 1
      }
    };
  }

});

module.exports = AuthStore;
