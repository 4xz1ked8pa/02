var React = require('react');
var PrivacyOptions = require('./../shared/privacy_options.jsx');
var ProfileFeedPost = require('./../main/profile_feed_post.jsx');

var ProfileUserFeed = React.createClass({
  render: function () {
    return (
      <div className="post-entry">
        <div className="input-row entry-value">
          <div className="entry-submit">
            <textarea className="input-field" placeholder="What's on your mind?"></textarea>
          </div>
        </div>
        <div className="input-row entry-interact">
          <div className="entry-asset">
            <div className="asset-icon fa fa-camera"></div>
          </div>
          <div className="entry-asset scale-down">
            <div className="asset-icon fa fa-file"></div>
          </div>
          <div className="entry-asset">
            <div className="asset-icon fa fa-map-marker"></div>
          </div>
          <div className="entry-asset">
            <div className="asset-icon fa fa-user"></div>
          </div>
          <div className="entry-asset">
            <div className="asset-icon fa fa-microphone"></div>
          </div>
          <div className="entry-submit">POST</div>
          <PrivacyOptions title="Friends" />
        </div>
      </div>
    );
  }
});

module.exports = ProfileUserFeed;
