var React = require('react');
var CalendarWeekDay = require('./../shared/calendar_week_day.jsx');
var CalendarAgileWeekEvent= require('./../shared/calendar_agile_week_event.jsx');

var CalendarAgileWeek = React.createClass({
  render: function () {
    return (
        <div className="calendar-agile-week">
          <div className="calendar-current">
            <div className="value">November 6<span class="value-dash">-</span>12 2015</div>
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
            <div className="grid-hours">
              <div className="hour"></div>
              <div className="hour"><div className="value">1 AM</div></div>
              <div className="hour"><div className="value">2 AM</div></div>
              <div className="hour"><div className="value">3 AM</div></div>
              <div className="hour"><div className="value">4 AM</div></div>
              <div className="hour"><div className="value">5 AM</div></div>
              <div className="hour"><div className="value">6 AM</div></div>
              <div className="hour"><div className="value">7 AM</div></div>
              <div className="hour"><div className="value">8 AM</div></div>
              <div className="hour"><div className="value">9 AM</div></div>
              <div className="hour"><div className="value">10 AM</div></div>
              <div className="hour"><div className="value">11 AM</div></div>
              <div className="hour"><div className="value">12 PM</div></div>
              <div className="hour"><div className="value">1 PM</div></div>
              <div className="hour"><div className="value">2 PM</div></div>
              <div className="hour"><div className="value">3 PM</div></div>
              <div className="hour"><div className="value">4 PM</div></div>
              <div className="hour"><div className="value">5 PM</div></div>
              <div className="hour"><div className="value">6 PM</div></div>
              <div className="hour"><div className="value">7 PM</div></div>
              <div className="hour"><div className="value">8 PM</div></div>
              <div className="hour"><div className="value">9 PM</div></div>
              <div className="hour"><div className="value">10 PM</div></div>
              <div className="hour"><div className="value">11 PM</div></div>
            </div>
            <div className="grid-days">
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">
                  <div className="events-wrap">
                    <CalendarAgileWeekEvent push="20" duration="80" />
                    <CalendarAgileWeekEvent push="140" duration="80" />
                    <CalendarAgileWeekEvent push="280" duration="150" />
                  </div>
                </div>
              </div>
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">

                </div>
              </div>
              <div className="grid-day active">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">
                  <div className="events-wrap">
                    <CalendarAgileWeekEvent push="60" duration="160" />
                    <CalendarAgileWeekEvent push="280" duration="40" />
                    <CalendarAgileWeekEvent push="340" duration="80" />
                  </div>
                </div>
              </div>
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events"></div>
              </div>
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">
                  <div className="events-wrap">
                    <CalendarAgileWeekEvent push="83" duration="100" />
                    <CalendarAgileWeekEvent push="220" duration="120" />
                  </div>
                </div>
              </div>
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">
                  <div className="events-wrap">
                    <CalendarAgileWeekEvent push="23" duration="40" />
                  </div>
                </div>
              </div>
              <div className="grid-day">
                <div className="day-hours">
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                  <div className="hour"><div className="half-hour"></div></div>
                </div>
                <div className="day-events">
                  <div className="events-wrap">
                    <CalendarAgileWeekEvent push="93" duration="150" />
                    <CalendarAgileWeekEvent push="310" duration="210" />
                  </div>
                </div>
              </div>
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

module.exports = CalendarAgileWeek;
