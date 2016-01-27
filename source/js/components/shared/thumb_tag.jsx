var React = require('react');

var ThumbTag = React.createClass({
  render: function () {
    return (
      <div className="thumbTag">
        <div className="tag-title">{this.props.title}</div>
        <div className="tag-count">{this.props.count}</div>
        <div className="tag-remove">REMOVE</div>
      </div>
    );
  }
});

module.exports = ThumbTag;
