var React = require('react');
var Thumb = require('./../shared/thumb.jsx');
var Pane = require('./../shared/pane.jsx');
var Search = require('./../topbar/search.jsx');
var Notify = require('./../topbar/notify.jsx');
var Identify = require('./../topbar/identify.jsx');
var classnames = require('classnames');
var _ = require('lodash');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className="topBar">
        <div className="logo">cursuum</div>
        <Identify />
        <Search />
        <Notify />
      </div>
    );
  }
});

module.exports = TopBar;
