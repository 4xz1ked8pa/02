var React = require('react');
var Thumb = require('./../shared/thumb.jsx');
var CalendarAgileMonth = require('./../shared/calendar_agile_month.jsx');
var CalendarAgileWeek = require('./../shared/calendar_agile_week.jsx');
var CalendarAgile = require('./../shared/calendar_agile.jsx');
var EventList = require('./../shared/event_list.jsx');
var DropArea = require('./../shared/drop_area.jsx');

var CreateEvent = React.createClass({
  render: function () {
    var headerClass = "createEvent modal-frame fixed";
    return (
      <div className={headerClass}>
        <div className="modal-wrap">
          <div className="side-center">
            <div className="body">
              <div className="event-title">
                <input className="value-input form-text" type="text" placeholder="Enter a title for your event" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              </div>
              <div className="event-details">
                <textarea className="value-input form-text" type="text" placeholder="Details to describe your event" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"></textarea>
                <div className="options">
                  <div className="option">TAGS</div>
                  <div className="option">FILES</div>
                  <div className="option">PRICE</div>
                </div>
              </div>
              <div className="context-left">
                <div className="event-members">
                  <div className="search">
                    <input className="form-text" type="text" placeholder="Invite members" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                    <div className="suggested-results">
                      <div className="result-wrap">
                        <Thumb title="Jonathan Brown" filename="http://placehold.it/500?text=PICTURE" />
                        <Thumb title="Angelo Foster" filename="http://placehold.it/500?text=PICTURE" />
                        <Thumb title="Christie Duncan" filename="http://placehold.it/500?text=PICTURE" />
                        <Thumb title="Harry Hill" filename="http://placehold.it/500?text=PICTURE" />
                      </div>
                    </div>
                  </div>
                  <div className="picked">
                    <Thumb title="Wesley Harris" filename="http://placehold.it/500?text=PICTURE" remove="true" />
                    <Thumb title="Norma Shelton" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                    <Thumb title="Jonathan Brown" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                    <Thumb title="Christie Duncan" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                    <Thumb title="Angelo Foster" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                    <Thumb title="Jesse Smith" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                    <Thumb title="Alexandre Grand" filename="http://placehold.it/500?text=PICTURE" remove="true"  />
                  </div>
                </div>
                <div className="event-location">
                  <div className="search">
                    <div className="map">
                      <div className="empty-message"><span className="value">SELECT A LOCATION</span></div>
                    </div>
                    <input className="form-text" type="text" placeholder="Select a location" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                      <div className="suggested-results">
                        <div className="result-wrap">
                          <Thumb title="Jonathan Brown" filename="http://placehold.it/500?text=PICTURE" />
                          <Thumb title="Angelo Foster" filename="http://placehold.it/500?text=PICTURE" />
                          <Thumb title="Christie Duncan" filename="http://placehold.it/500?text=PICTURE" />
                          <Thumb title="Harry Hill" filename="http://placehold.it/500?text=PICTURE" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="context-right">
                <div className="event-calendar">
                  <CalendarAgileMonth />
                </div>
              </div>
            </div>
            <div className="footer">
              <a className="more-settings" href="#">More settings</a>
              <a className="button create-event" href="#">CREATE EVENT</a>
            </div>
          </div>
          <div className="side-right">
            <div className="side-wrap">
              <div className="groups">
                <div className="group">
                  <div className="header">
                    <div className="trigger">Select a category<span className="caret fa fa-caret-down"></span></div>
                    <div className="suggested-results">
                      <div className="results-header">
                        <div className="search">
                          <input type="text" placeholder="Search categories"  className="form-text" />
                        </div>
                      </div>
                      <div className="results-body">
                        <div className="result">School</div>
                        <div className="result">Work</div>
                        <div className="result">Social</div>
                        <div className="result">Family</div>
                      </div>
                      <div className="results-footer">
                        <a href="#" className="new-category-trigger"><span className="icon fa fa-plus"></span>New category</a>
                      </div>
                    </div>
                  </div>
                  <div className="events">
                    <EventList />
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="add-category">
                  <div className="label">Add category</div>
                </div>
                <div className="new-event fa fa-plus"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateEvent;
