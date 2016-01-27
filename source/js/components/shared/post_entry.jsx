var React = require('react');
var PrivacyOptions = require('./../shared/privacy_options.jsx');
var ProfileFeedPost = require('./../main/profile_feed_post.jsx');

var ProfileUserFeed = React.createClass({
  render: function () {
    var headerClass = "post-entry";
    var inputPlaceholder = "What's on your mind?";
    if (this.props.mode) {
      if (this.props.mode = "reply") {
        var headerClass = "post-entry entry-reply";
        var inputPlaceholder = "Write a reply...";
      }
    }
    return (
      <div className={headerClass}>
        <div className="input-row entry-value">
          <div className="entry-submit">
            <textarea className="input-field" placeholder={inputPlaceholder}></textarea>
            <div className="post-emoji">
              <a className="emoji-trigger fa fa-smile-o" href="#"></a>
            </div>
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
