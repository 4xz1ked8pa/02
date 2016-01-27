var React = require('react');

var ConnectionOptions = React.createClass({
  render: function () {
    return (
      <div className="dropdown connection-options">
        <div className="dropdown-trigger">
          <span className="trigger-icon fa fa-check"></span><span className="trigger-label">{this.props.connected}</span><span className="trigger-caret fa fa-caret-down"></span>
        </div>
        <div className="dropdown-content">
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option">Get notifications</div>
          </div>
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option active">Close friends</div>
            <div className="content-option">Acquaintances</div>
            <div className="content-option">Add a new list</div>
          </div>
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option disconnect">Suggest friends</div>
          </div>
          <div className="options-row">
            <div className="options-divider"><div className="divider-wrap"></div></div>
            <div className="content-option disconnect">Unfriend</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ConnectionOptions;
