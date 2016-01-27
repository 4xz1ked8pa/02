var React = require('react');

var ProfileNavigationTab = React.createClass({
  render: function () {
    var tabClass = "profile-navigation-tab";
    if (this.props.active) {
      var tabClass = "profile-navigation-tab active";
    }
    return (
      <div className={tabClass}>{this.props.title}</div>
    );
  }
});

module.exports = ProfileNavigationTab;
