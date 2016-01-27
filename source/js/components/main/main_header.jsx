var React = require('react');

var MainHeader = React.createClass({
  render: function () {
    return (
      <div className="main-header">
        <h1 className="title">{this.props.title}</h1>
        <h2 className="subtitle">{this.props.subtitle}</h2>
      </div>
    );
  }
});

module.exports = MainHeader;
