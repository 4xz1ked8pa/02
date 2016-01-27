var React = require('react');

var ProfileTabs = React.createClass({
  render: function () {
    return (
      <div className="profile-tabs">
        <div className="tab section-feed">Feed</div>
        <div className="tab section-schedule">Schedule</div>
        <div className="tab section-about">About</div>
        <div className="tab section-friends active">Friends</div>
        <div className="tab section-photos hide">Photos</div>
        <div className="tab sections-more">More<span className="caret fa fa-caret-down"></span></div>
      </div>
    );
  }
});

module.exports = ProfileTabs;
