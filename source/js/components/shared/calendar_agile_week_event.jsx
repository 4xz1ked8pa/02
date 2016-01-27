var React = require('react');

var CalendarAgileWeekEvent = React.createClass({
  render: function () {
    var eventStyle = {
      height: this.props.duration,
      top: this.props.push
    };
    return (
      <div className="calendar-agile-week-event" style={eventStyle}>

      </div>
    );
  }
});

module.exports = CalendarAgileWeekEvent;
