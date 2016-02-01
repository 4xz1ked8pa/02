var React = require('react');
var Pane = require('./../shared/pane.jsx');
var classnames = require('classnames');
var _ = require('lodash');

var Search = React.createClass({

  getInitialState: function() {
    return { active: false , value: ''};
  },
  handleFocus: function() {
    this.setState({active: true});
  },
  handleBlur: function() {
    this.setState({active: false});
  },

  render: function () {
    var searchClasses = classnames('search', {active: this.state.active});
    var value = this.state.value;

    return (
        <div className={searchClasses}>
          <input className="form-text"
                 onFocus={this.handleFocus}
                 onBlur={ this.handleBlur}
                 placeholder="Search for people, schedules, events and more" type="text" />
          <Pane />
        </div>
    );
  }
});

module.exports = Search;
