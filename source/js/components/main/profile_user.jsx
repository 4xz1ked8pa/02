var React = require('react');
var ProfileHero = require('./../main/profile_hero.jsx');
var ProfileTabs = require('./../main/profile_tabs.jsx');
var ProfileUserAbout = require('./../main/profile_user_about.jsx');
var ProfileUserFriends = require('./../main/profile_user_friends.jsx');
var ProfileUserFeed = require('./../main/profile_user_feed.jsx');

var ProfileUser = React.createClass({
  render: function () {
    return (
        <div className="profile-user">
          <ProfileHero />
          <ProfileTabs />
          <ProfileUserFeed />
        </div>
    );
  }
});

module.exports = ProfileUser;
