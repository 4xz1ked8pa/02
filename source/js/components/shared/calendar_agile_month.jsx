var React = require('react');
var CalendarAgileMonthBlock = require('./../shared/calendar_agile_month_block.jsx');

var CalendarAgileMonth = React.createClass({
  render: function () {
    return (
        <div className="calendar-agile-month demonstrate-heat">
          <div className="calendar-current">
            <div className="value">November 2015</div>
            <div className="switches">
              <span className="switch back fa fa-chevron-left"></span>
              <span className="switch next fa fa-chevron-right"></span>
            </div>
          </div>
          <div className="calendar-labels">
            <div className="label">Sun</div>
            <div className="label">Mon</div>
            <div className="label">Tue</div>
            <div className="label">Wed</div>
            <div className="label">Thu</div>
            <div className="label">Fri</div>
            <div className="label">Sat</div>
          </div>
          <div className="calendar-grid">
            <div className="grid-week">
              <CalendarAgileMonthBlock date="29"  heat="1" offset="previous" />
              <CalendarAgileMonthBlock date="30"  heat="1" offset="previous" />
              <CalendarAgileMonthBlock date="Nov 1"  heat="1" />
              <CalendarAgileMonthBlock date="2"  heat="1" />
              <CalendarAgileMonthBlock date="3"  heat="1" />
              <CalendarAgileMonthBlock date="4"  heat="1" />
              <CalendarAgileMonthBlock date="5"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="5"  heat="1" />
              <CalendarAgileMonthBlock date="6"  heat="1" />
              <CalendarAgileMonthBlock date="7"  heat="1" />
              <CalendarAgileMonthBlock date="8"  heat="1" />
              <CalendarAgileMonthBlock date="9"  heat="1" />
              <CalendarAgileMonthBlock date="10"  heat="1" />
              <CalendarAgileMonthBlock date="11"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="12"  heat="1" />
              <CalendarAgileMonthBlock date="13"  heat="1" status="today" />
              <CalendarAgileMonthBlock date="14"  heat="1" />
              <CalendarAgileMonthBlock date="15"  heat="1" />
              <CalendarAgileMonthBlock date="16"  heat="1" />
              <CalendarAgileMonthBlock date="17"  heat="1" />
              <CalendarAgileMonthBlock date="18"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="19"  heat="1" />
              <CalendarAgileMonthBlock date="20"  heat="1" />
              <CalendarAgileMonthBlock date="21"  heat="1" />
              <CalendarAgileMonthBlock date="22"  heat="1" />
              <CalendarAgileMonthBlock date="23"  heat="1" />
              <CalendarAgileMonthBlock date="24"  heat="1" />
              <CalendarAgileMonthBlock date="25"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="26"  heat="1" />
              <CalendarAgileMonthBlock date="27"  heat="1" />
              <CalendarAgileMonthBlock date="28"  heat="1" />
              <CalendarAgileMonthBlock date="29"  heat="1" />
              <CalendarAgileMonthBlock date="30"  heat="1" />
              <CalendarAgileMonthBlock date="31"  heat="1" />
              <CalendarAgileMonthBlock date="Dec 1"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="2"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="3"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="4"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="5"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="6"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="7"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="8"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="9"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="10"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="11"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="12"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="13"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="14"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="15"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="16"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="17"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="18"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="19"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="20"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="21"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="22"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="23"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="24"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="25"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="26"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="27"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="28"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="29"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="30"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="31"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="Jan 1"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="2"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="3"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="4"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="5"  heat="1" offset="next" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="6"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="7"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="8"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="9"  heat="1" offset="next" />
              <CalendarAgileMonthBlock date="10"  heat="1" />
              <CalendarAgileMonthBlock date="11"  heat="1" />
              <CalendarAgileMonthBlock date="12"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="13"  heat="1" />
              <CalendarAgileMonthBlock date="14"  heat="1" />
              <CalendarAgileMonthBlock date="15"  heat="1" />
              <CalendarAgileMonthBlock date="16"  heat="1" />
              <CalendarAgileMonthBlock date="17"  heat="1" />
              <CalendarAgileMonthBlock date="18"  heat="1" />
              <CalendarAgileMonthBlock date="19"  heat="1" />
            </div>
            <div className="grid-week">
              <CalendarAgileMonthBlock date="20"  heat="1" />
              <CalendarAgileMonthBlock date="21"  heat="1" />
              <CalendarAgileMonthBlock date="22"  heat="1" />
              <CalendarAgileMonthBlock date="23"  heat="1" />
              <CalendarAgileMonthBlock date="24"  heat="1" />
              <CalendarAgileMonthBlock date="25"  heat="1" />
              <CalendarAgileMonthBlock date="26"  heat="1" />
            </div>
          </div>
          <div className="calendar-heat">
            <div className="heat-distribution">
              <div className="heat-spot heat-9"><img src="http://placehold.it/500?text=PICTURE" /></div>
              <div className="heat-spot heat-9"><img src="http://placehold.it/500?text=PICTURE" /></div>
              <div className="heat-spot heat-9"><img src="http://placehold.it/500?text=PICTURE" /></div>

                <div className="heat-spot heat-6"><img src="http://placehold.it/500?text=PICTURE" /></div>
                <div className="heat-spot heat-6"><img src="http://placehold.it/500?text=PICTURE" /></div>
                <div className="heat-spot heat-6"><img src="http://placehold.it/500?text=PICTURE" /></div>

                <div className="heat-spot heat-3"><img src="http://placehold.it/500?text=PICTURE" /></div>
                <div className="heat-spot heat-3"><img src="http://placehold.it/500?text=PICTURE" /></div>
                <div className="heat-spot heat-3"><img src="http://placehold.it/500?text=PICTURE" /></div>
                <div className="heat-spot heat-3"><img src="http://placehold.it/500?text=PICTURE" /></div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = CalendarAgileMonth;
