var React = require('react');
var Thumb = require('./../shared/thumb.jsx');
var Pane = require('./../shared/pane.jsx');
var NotifyCount = require('./../shared/notify_count.jsx');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className="topBar">
        <div className="logo">cursuum</div>
        <div className="identify">
          <div className="thumb">
            <div className="image">
              <div className="mask"></div>
              <img src="https://avatars3.githubusercontent.com/u/3092838?v=3&s=460" />
            </div>
            <div className="title">Charles Gaudreau Jackson</div>
          </div>
        </div>
        <div className="search">
          <input className="form-text" placeholder="Search for people, schedules, events and more" type="text" />
          <Pane />
        </div>
        <div className="notify">
          <a href="#" className="trigger fa fa-globe"><NotifyCount count="12" /></a>
          <Pane pointer="top" tabs="3" tab1="Requests" tab2="Feed" tab3="Messages"/>
        </div>
      </div>
    );
  }
});

module.exports = TopBar;
