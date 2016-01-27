var React = require('react');
var CalendarAgileWeek = require('./../shared/calendar_agile_week.jsx');
var CalendarAgileMonth = require('./../shared/calendar_agile_month.jsx');

var CalendarAgile = React.createClass({
  render: function () {
    if (this.props.mode) {
      if (this.props.mode = "month") {
        var CalendarAgileView = <CalendarAgileMonth />
      }
      else if (this.props.mode = "week")  {
        var CalendarAgileView = <CalendarAgileWeek />
      }
    }
    else {
      var CalendarAgileView = <CalendarAgileWeek />
    }
    return (
      <div className="calendar-agile">
        {CalendarAgileView}
      </div>
    );
  }
});

module.exports = CalendarAgile;
