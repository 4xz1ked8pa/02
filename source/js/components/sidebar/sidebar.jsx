var React = require('react');
var Thumb =

var SideBar = React.createClass({
  render: function () {
    return (
        <div className="sideBar">
          <div className="access-module">
            <Thumb title="Events" finename="placeholder.jpg" notify-count="2" />
            <div className="thumb">
              <span className="icon fa fa-calendar"></span>
              <span className="title">People</span>
              <span className="capsule">6</span>
            </div>
          </div>
          <div className="access-module">
            <div className="thumb">
              <span className="title">McGill Students Association</span>
              <span className="capsule">6</span>
            </div>
            <div className="thumb">
              <span className="icon fa fa-calendar"></span>
              <span className="title">Code jams</span>
              <span className="capsule">6</span>
            </div>
            <div className="thumb">
              <span className="icon fa fa-calendar"></span>
              <span className="title">Montreal couch surfing</span>
              <span className="capsule">6</span>
            </div>
          </div>
          <div className="manage-filters">
            <div className="thumb">
              <span className="title">Charles Gaudreau Jackson</span>
              <span className="close fa fa-close"></span>
            </div>
          </div>
          <div className="jump-calendar monthly">
            <div className="header">
              <span className="fa fa-chevron-left"></span>
              <div className="title">
                <span className="month">November</span>
                <span className="year">2015</span>
              </div>
              <span className="fa fa-chevron-right"></span>
            </div>
            <ul className="jump-grid">

            </ul>
          </div>
          <ul className="interact">
            <span className="option add-event"></span>
            <span className="option add-filter"></span>
            <span className="option add-stack"></span>
            <span className="access-settings"></span>
          </ul>
        </div>
    );
  }
});

module.exports = SideBar;