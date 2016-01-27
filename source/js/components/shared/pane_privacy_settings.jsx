var React = require('react');

var PanePrivacySettings = React.createClass({
  render: function () {
    return (
      <div className="pane-privacy-settings">
        <a href="#" className="dropdown-trigger option">
          <span className="trigger-icon fa fa-globe"></span>
          <span className="trigger-label">Public</span>
        </a>
        <div className="other-options">
          <a href="#" className="dropdown-trigger option">
            <span className="trigger-icon fa fa-user"></span>
            <span className="trigger-label">Friends</span>
          </a>
          <a href="#" className="dropdown-trigger option">
            <span className="trigger-icon fa fa-lock"></span>
            <span className="trigger-label">Only me</span>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = PanePrivacySettings;
