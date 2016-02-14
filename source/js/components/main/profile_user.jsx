var React = require('react');
var ProfileHero = require('./../main/profile_hero.jsx');
var ProfileTabs = require('./../main/profile_tabs.jsx');
var ProfileAbout = require('./../main/profile_about.jsx');
var ProfileMembers = require('./../main/profile_members.jsx');
var ProfileFeed = require('./../main/profile_feed.jsx');
var ProfileSchedule = require('./../main/profile_schedule.jsx');

var ProfileUser = React.createClass({
  render: function () {
    return (
        <div className="profile-user">
          <ProfileHero />
          <ProfileTabs />
          <ProfileSchedule />
        </div>
    );
  }
});

module.exports = ProfileUser;
