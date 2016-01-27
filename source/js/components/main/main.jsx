var React = require('react');
var MainHeader = require('./../main/main_header.jsx');
var ChatBox = require('./../chatbar/chatbox.jsx');
var CalendarMonth = require('./../shared/calendar_month.jsx');
var CalendarWeek= require('./../shared/calendar_week.jsx');
var CalendarWeek= require('./../shared/calendar_week.jsx');
var ProfileUser = require('./../main/profile_user.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div className="Main">
        <div className="chat-boxes">
          <ChatBox who="Jonathan Brown" status="online" fold="folded" />
          <ChatBox who="Howard Foster" status="online" fold="folded" />
          <ChatBox who="Barry Clarke" status="offline" fold="folded"/>
        </div>
        <div className="main-view">
          <ProfileUser />
        </div>
      </div>
    );
  }
});

module.exports = Main;
