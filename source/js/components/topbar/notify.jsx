var React = require('react');
var Pane = require('./../shared/pane.jsx');
var NotifyCount = require('./../topbar/notify_count.jsx');
var classnames = require('classnames');
var _ = require('lodash');

var Thumb = React.createClass({

  getInitialState: function() {
    return { active: false , value: ''};
  },
  handleClick: function() {
    this.setState({active: true});
  },
  handleBlur: function() {
    this.setState({active: false});
  },

  render: function () {
    var notifyClasses = classnames('notify', {active: this.state.active});
    var value = this.state.value;

    return (
      <div className={notifyClasses}>
        <a href="#"
           className="trigger fa fa-globe"
           onClick={this.handleClick}
           onBlur={this.handleBlur}><NotifyCount count="12" /></a>
        <Pane pointer="top" tabs="3" tab1="Requests" tab2="Feed" tab3="Messages"/>
      </div>
    );
  }
});

module.exports = Thumb;
