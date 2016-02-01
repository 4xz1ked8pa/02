var React = require('react');
var classnames = require('classnames');
var _ = require('lodash');

var ConnectionOptions = React.createClass({

  getInitialState: function() {
    return { active: false , value: ''};
  },
  handleClick: function() {
    this.setState({active: true});
  },
  handleBlur: function() {
    this.setState({active: false});
  },

  render: function () {
    var dropdownClasses = classnames('dropdown', 'connection-options',{active: this.state.active});
    var value = this.state.value;

    return (
      <div className={dropdownClasses}>
        <div className="dropdown-trigger"
             onClick={this.handleClick}
             onBlur={this.handleBlur}>
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
