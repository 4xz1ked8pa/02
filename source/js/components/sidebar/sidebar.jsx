var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var SideBar = React.createClass({
  render: function () {
    return (
        <div className="sideBar">
          <div className="access-module">
            <Thumb title="Events" iconname="calendar" notifycount="1" capsule="True"/>
            <Thumb title="Stacks" iconname="team" notifycount="2" capsule="True"/>
            <Thumb title="People" iconname="bubble" notifycount="3" capsule="True"/>
          </div>
          <div className="access-module">
            <Thumb title="McGill University Association" iconname="calendar" notifycount="2" />
            <Thumb title="Code Jams" iconname="calendar" notifycount="6" />
            <Thumb title="2600 The Hacker Quartely" iconname="calendar" notifycount="6" />
            <Thumb title="Web Cats Community" iconname="calendar" notifycount="6" />
          </div>
          <div className="manage-filters">
            <Thumb title="Charles Gaudreau Jackson" canRemove />
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