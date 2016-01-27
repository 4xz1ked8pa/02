var React = require('react');
var PaneItem = require('./../shared/pane_item.jsx');
var CalendarWeekDay = require('./../shared/calendar_week_day.jsx');
var CalendarWeekEvent = require('./../shared/calendar_week_event.jsx');

var CalendarWeek = React.createClass({
  render: function () {
    return (
      <div className="calendar-week">
        <div className="calendar-labels">
          <div className="label">Sunday 12</div>
          <div className="label">Monday 13</div>
          <div className="label">Tuesday 14</div>
          <div className="label">Wednesday 15</div>
          <div className="label">Thursday 16</div>
          <div className="label">Friday 17</div>
          <div className="label">Saturday 18</div>
        </div>
        <div className="calendar-grid">
          <div className="grid-wrap">
            <div className="all-day">
              <div className="settings"></div>
              <div className="week-days">
                <div className="week-day"></div>
                <div className="week-day"></div>
                <div className="week-day"></div>
                <div className="week-day"></div>
                <div className="week-day"></div>
                <div className="week-day"></div>
                <div className="week-day"></div>
              </div>
            </div>
            <div className="grid-rest">
              <div className="hours">
                <div className="hour"></div>
                <div className="hour"><span className="value">1 AM</span></div>
                <div className="hour"><span className="value">2 AM</span></div>
                <div className="hour"><span className="value">3 AM</span></div>
                <div className="hour"><span className="value">4 AM</span></div>
                <div className="hour"><span className="value">5 AM</span></div>
                <div className="hour"><span className="value">6 AM</span></div>
                <div className="hour"><span className="value">7 AM</span></div>
                <div className="hour"><span className="value">8 AM</span></div>
                <div className="hour"><span className="value">9 AM</span></div>
                <div className="hour"><span className="value">10 AM</span></div>
                <div className="hour"><span className="value">11 AM</span></div>
                <div className="hour"><span className="value">12 PM</span></div>
                <div className="hour"><span className="value">1 PM</span></div>
                <div className="hour"><span className="value">2 PM</span></div>
                <div className="hour"><span className="value">3 PM</span></div>
                <div className="hour"><span className="value">4 PM</span></div>
                <div className="hour"><span className="value">5 PM</span></div>
                <div className="hour"><span className="value">6 PM</span></div>
                <div className="hour"><span className="value">7 PM</span></div>
                <div className="hour"><span className="value">8 PM</span></div>
                <div className="hour"><span className="value">9 PM</span></div>
                <div className="hour"><span className="value">10 PM</span></div>
                <div className="hour"><span className="value">11 PM</span></div>
              </div>
              <div className="week-days">
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">

                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">
                    <div className="events-wrap">
                      <CalendarWeekEvent title="Clarinette rehearsal" time="1:45 AM" top="320" />
                    </div>
                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">
                    <div className="events-wrap">
                      <CalendarWeekEvent title="Math tutoring" time="1:45 AM" top="192" />
                      <CalendarWeekEvent title="Patrick's birthday party" time="1:45 AM" top="512" />
                    </div>
                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">
                    <div className="events-wrap">
                      <CalendarWeekEvent title="Tech meeting at Notman House" time="1:45 AM" top="384" />
                    </div>
                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">
                    <div className="events-wrap">
                      <CalendarWeekEvent title="Clarinette rehearsal" time="1:45 AM" top="256" />
                    </div>
                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks">
                    <div className="events-wrap">
                      <CalendarWeekEvent title="U2 World Tour concert" time="1:45 AM" top="448" />
                    </div>
                  </div>
                </div>
                <div className="week-day">
                  <div className="hour-blocks">
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                    <div className="hour-block">
                      <div className="half-hour"></div>
                    </div>
                  </div>
                  <div className="event-blocks"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CalendarWeek;
