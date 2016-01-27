var React = require('react');
var ProfileListItem = require('./../main/profile_list_item.jsx');
var ProfileNavigationTab = require('./../main/profile_navigation_tab.jsx');
var ProfileListFriend = require('./../main/profile_list_friend.jsx');

var ProfileUserFriends = React.createClass({
  render: function () {
    return (
      <div className="profile-core profile-user-friends">
        <div className="core-navigation">
          <ProfileNavigationTab title="All friends" active />
          <ProfileNavigationTab title="Mutual Friends" />
          <ProfileNavigationTab title="Recently Added" />
          <ProfileNavigationTab title="Around me" />
          <ProfileNavigationTab title="University" />
          <ProfileNavigationTab title="High School" />
          <ProfileNavigationTab title="Acquantainces" />
        </div>
        <div className="core-content">
          <div className="friends-col">
            <ProfileListFriend title="Deborah Miller" mutual="31 mutual friends" connected="close friend" />
            <ProfileListFriend title="Caleb Freeman" mutual="12 mutual friends" connected="friend" />
            <ProfileListFriend title="Nicholas Brown" mutual="46 mutual friends" connected="friend" />
            <ProfileListFriend title="Harry Hill" mutual="28 mutual friends" connected="friend" />
            <ProfileListFriend title="Julian Dennis" mutual="13 mutual friends" />
          </div>
          <div className="friends-col">
            <ProfileListFriend title="Angelo Foster" mutual="63 mutual friends" connected="close friend" />
            <ProfileListFriend title="Norma Shelton" mutual="3 mutual friends" connected="friend" />
            <ProfileListFriend title="Christie Duncan" mutual="17 mutual friends" connected="friend" />
            <ProfileListFriend title="Terrel Carpenter" mutual="54 mutual friends" connected="friend" />
            <ProfileListFriend title="Mack Wong" mutual="12 mutual friends" />
        </div>
          <div className="friends-col">
            <ProfileListFriend title="Alvin Swanson" mutual="28 mutual friends" connected="friend" />
            <ProfileListFriend title="Jean Klein" mutual="18 mutual friends" connected="friend" />
            <ProfileListFriend title="Wesley Harris" mutual="33 mutual friends" connected="friend" />
            <ProfileListFriend title="Nathan Holt" mutual="47 mutual friends" connected="friend" />
            <ProfileListFriend title="Lena Murray" mutual="21 mutual friends" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileUserFriends;
