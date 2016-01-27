var React = require('react');

var DropArea = React.createClass({
  render: function () {
    return (
      <div className="drop-area">
        <div className="area-wrap">
          <div className="center">
            <div className="drop-title">{this.props.title}</div>
            <div className="drop-statement">{this.props.statement}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DropArea;
