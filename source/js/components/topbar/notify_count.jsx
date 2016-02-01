var React = require('react');

var NotifyCount = React.createClass({
  render: function () {
    return (
        <div className="notify-count">{this.props.count}</div>
    );
  }
});

module.exports = NotifyCount;
