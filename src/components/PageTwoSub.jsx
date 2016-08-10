var React = require('react');

var styles = ['alert alert-warning', 'alert alert-success'];

var PageTwoSub = React.createClass({

  getInitialState : function(){
    return {
      alertStyleIndex : 0,
      alertAlive : true
    }
  },

  destroyAlert : function(){
    this.setState({
      alertAlive : false
    })
  },

  toggleAlertStyle : function(){
    var newStyleIndex = ((this.state.alertStyleIndex) === styles.length - 1) ? 0 : (this.state.alertStyleIndex+1);
    this.setState({
      alertStyleIndex : newStyleIndex
    });
  },

  render : function(){
    var alertContent = null;
    if(this.state.alertAlive){
        alertContent = <div onClick={this.destroyAlert} onMouseOver={this.toggleAlertStyle} className={styles[this.state.alertStyleIndex]}>Now ya done it, dang foo!</div> ;
    } else{
        alertContent = <div className="alert alert-danger">You appear to have killed the alert</div>;
    }

    return (
      <div className="container">
        {alertContent}
      </div>
    )
  }
});

module.exports = PageTwoSub;
