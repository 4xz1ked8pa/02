var React = require('react');
var PaneItem = require('./../shared/pane_item.jsx');

var Pane = React.createClass({
  render: function () {
    var headerClass = "pane pointer-bottom";
    if (this.props.pointer) {
      if (this.props.pointer == "top") {
        var headerClass = "pane pointer-top";
      }
      if (this.props.pointer == "bottom") {
        var headerClass = "pane pointer-bottom";
      }
    }
    return (
    <div className={headerClass}>

    </div>
    );
  }
});

module.exports = PaneIdeograms;
