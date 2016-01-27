var React = require('react');

var EventListDate = React.createClass({
  render: function () {
    return (
      <div className="event-list-date folded">
        <div className="primary">
          <span className="month-day">November 5</span><span className="year"> 2015</span>
          <div className="date-interact">
            <div className="options-current">
              <div className="option fa fa-user"></div>
              <div className="option fa fa-tag"></div>
            </div>
            <div className="options-trigger fa fa-caret-down"></div>
          </div>
        </div>
        <div className="secondary">
          <div className="hour">8:00 AM</div> to <div className="hour">10:20 AM</div>
          <div className="price"><span className="icon fa fa-dollar"></span>25</div>
        </div>
      </div>
    );
  }
});

module.exports = EventListDate;
