var React = require('react');

var CalendarWeekHours = React.createClass({
  render: function () {
    return (
      <div className="day-hours">
        <div className="day-hour"><span className="hour-value">1 AM</span></div>
        <div className="day-hour"><span className="hour-value">2 AM</span></div>
        <div className="day-hour"><span className="hour-value">3 AM</span></div>
        <div className="day-hour"><span className="hour-value">4 AM</span></div>
        <div className="day-hour"><span className="hour-value">5 AM</span></div>
        <div className="day-hour"><span className="hour-value">6 AM</span></div>
        <div className="day-hour"><span className="hour-value">7 AM</span></div>
        <div className="day-hour"><span className="hour-value">8 AM</span></div>
        <div className="day-hour"><span className="hour-value">9 AM</span></div>
        <div className="day-hour"><span className="hour-value">10 AM</span></div>
        <div className="day-hour"><span className="hour-value">11 AM</span></div>
        <div className="day-hour"><span className="hour-value">12 PM</span></div>
        <div className="day-hour"><span className="hour-value">1 PM</span></div>
        <div className="day-hour"><span className="hour-value">2 PM</span></div>
        <div className="day-hour"><span className="hour-value">3 PM</span></div>
        <div className="day-hour"><span className="hour-value">4 PM</span></div>
        <div className="day-hour"><span className="hour-value">5 PM</span></div>
        <div className="day-hour"><span className="hour-value">6 PM</span></div>
        <div className="day-hour"><span className="hour-value">7 PM</span></div>
        <div className="day-hour"><span className="hour-value">8 PM</span></div>
        <div className="day-hour"><span className="hour-value">9 PM</span></div>
        <div className="day-hour"><span className="hour-value">10 PM</span></div>
        <div className="day-hour"><span className="hour-value">11 PM</span></div>
      </div>
    );
  }
});

module.exports = CalendarWeekHours;
