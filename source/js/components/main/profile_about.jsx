var React = require('react');
var ProfileListItem = require('./../main/profile_list_item.jsx');
var ProfileListItemAdd = require('./../main/profile_list_add_item.jsx');
var ProfileNavigationTab = require('./../main/profile_navigation_tab.jsx');

var ProfileUserAbout = React.createClass({
  render: function () {
    return (
      <div className="profile-core profile-user-about">
        <div className="core-navigation">
          <ProfileNavigationTab title="Overview" active />
          <ProfileNavigationTab title="Education and work" />
          <ProfileNavigationTab title="Achievements and goals" />
          <ProfileNavigationTab title="Places you've lived" />
          <ProfileNavigationTab title="Places you've been" />
          <ProfileNavigationTab title="Family and relationships" />
          <ProfileNavigationTab title="Contact and basic info" />
          <ProfileNavigationTab title="Details about you" />
        </div>
        <div className="core-content">
          <div className="content-group work">
            <div className="group-body">
              <ProfileListItem title="Cursuum" subtitle="Developer" since="2012" />
            </div>
            <div className="group-divider"><div className="divider-wrap"></div></div>
          </div>
          <div className="content-group education">
            <div className="group-body">
              <ProfileListItem title="Concordia University" subtitle="Economics" location="Montreal, Quebec" time="Class of 2013" />
              <ProfileListItem title="College Jean-de-Brebeuf" subtitle="Social studies" location="Montreal, Quebec" time="Class of 2008" />
            </div>
            <div className="group-divider"><div className="divider-wrap"></div></div>
          </div>
          <div className="content-group family-members">
            <div className="group-body">
              <ProfileListItem title="Marlene Gaudreau" subtitle="Cousin" type="family" />
              <ProfileListItem title="Laurence Gaudreau" subtitle="Cousin" type="family" />
              <ProfileListItem title="Isabelle Gaudreau" subtitle="Cousin" type="family" />
            </div>
            <div className="group-divider"><div className="divider-wrap"></div></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileUserAbout;
