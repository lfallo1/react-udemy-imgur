var AuthStore = require('AuthStore');

module.exports = {

  requireAuth : function(nextState, replace) {
    if (!AuthStore.isLoggedIn()) {
      replace({ pathname: '/login', query: { next: nextState.location.pathname } })
    }
  },

  isAnonymous : function(nextState, replace){
    if (AuthStore.isLoggedIn()) {
      replace('/');
    }
  }

}
