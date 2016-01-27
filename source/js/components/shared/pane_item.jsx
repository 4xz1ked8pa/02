var React = require('react');

var PaneItem = React.createClass({
  render: function () {
    if (this.props.timeStamp) {
      var when = <div className="when">{this.props.timeStamp}</div>;
    }
    if (this.props.context) {
      if (this.props.context == "request") {
        var headerClass = "pane-item request";
        var options =
        <div className="item-options">
          <a href="#" className="item-option button save">Accept</a>
          <a href="#" className="item-option button cancel">Decline</a>
        </div>;
      }
      if (this.props.context == "message") {
        var headerClass = "pane-item message";
        if (this.props.status == "read") {
          var status = <div className="status"></div>;
          var checkBox = <div className="check checked fa fa-circle-o"></div>
        }
        if (this.props.status == "new") {
          var status = <div className="status"></div>;
          var checkBox = <div className="check not-checked fa fa-circle-o"></div>

        }
      }
    }
    return (
    <div className={headerClass}>
      <div className="pane-picture"></div>
      <div className="pane-infos">
        <div className="row">
          <div className="title">{this.props.title}</div>{checkBox}
        </div>
        <div className="row">
          {status}<div className="subtitle">{this.props.subTitle}</div>{when}
        </div>
      </div>
      {options}
    </div>
    );
  }
});

module.exports = PaneItem;
