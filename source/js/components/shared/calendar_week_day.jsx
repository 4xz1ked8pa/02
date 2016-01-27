var React = require('react');
var CalendarDayHours = require('./../shared/calendar_day_hours.jsx');

var CalendarWeekDay = React.createClass({
  render: function () {
    if (this.props.hours) {
      var dayHours = <CalendarDayHours />;
    }
    return (
      <div className="week-day">
        {dayHours}
        <div className="events">

        </div>
        <div className="hours">
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
          <div className="hour"><span className="half"></span><span className="half"></span></div>
        </div>
      </div>
    );
  }
});

module.exports = CalendarWeekDay;
