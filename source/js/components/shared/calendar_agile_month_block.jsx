var React = require('react');

var CalendarAgileMonthBlock = React.createClass({
  render: function () {
    var headerClass = "calendar-agile-month-block";
    if (this.props.offset) {
      if (this.props.offset = "previous") {
        var headerClass = "calendar-agile-month-block offset previous";
      }
      if (this.props.offset = "next") {
        var headerClass = "calendar-agile-month-block offset next";
      }
    }
    if (this.props.status) {
      if (this.props.status = "today") {
        var headerClass = headerClass + " today";
      }
    }
    return (
      <div className={headerClass}>
        <span className="date">{this.props.date}</span>
      </div>
    );
  }
});

module.exports = CalendarAgileMonthBlock;
