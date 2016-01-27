var React = require('react');

var CalendarWeekEvent = React.createClass({
  render: function () {
    return (
      <div className="week-event" style={{top:this.props.top + "px"}}>
        <div className="row">
          <span className="event-title">{this.props.title}</span>
        </div>
        <div className="row">
          <span className="event-time">{this.props.time}</span>
        </div>
        <div className="row">
          <div className="event-members">
            <div className="event-member">
              <div className="picture"></div>
            </div>
            <div className="event-member">
              <div className="picture"></div>
            </div>
            <div className="event-member">
              <div className="picture"></div>
            </div>
            <div className="event-member">
              <div className="picture"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CalendarWeekEvent;
