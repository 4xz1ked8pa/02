var React = require('react');

var CalendarMonthDay = React.createClass({
  render: function () {
    return (
      <div className="month-day">
        <div className="block-header">
          <span className="date">{this.props.date}</span>
          <span className="weather fa fa-cloud"></span>
        </div>
        <div className="block-events">
          <div className="block-event">
            <span className="title">Patrick's birthday party</span>
            <span className="time">3pm</span>
          </div>
          <div className="block-event">
            <span className="title">TFS launch party</span>
            <span className="time">5pm</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CalendarMonthDay;
