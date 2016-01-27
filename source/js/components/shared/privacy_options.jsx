var React = require('react');

var PrivacyOptions = React.createClass({
  render: function () {
    return (
      <div className="dropdown privacy-options">
        <div className="dropdown-trigger">
          <span className="trigger-icon fa fa-globe"></span><span className="trigger-label">{this.props.title}</span><span className="trigger-caret fa fa-caret-down"></span>
        </div>
        <div className="dropdown-content">
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option">Friends</div>
            <div className="content-option active">Close friends</div>
            <div className="content-option">School<span className="option-dash">/</span>Work</div>
            <div className="content-option">Add a new list</div>
          </div>
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option">Privacy Settings</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PrivacyOptions;
