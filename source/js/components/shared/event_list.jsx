var React = require('react');
var ThumbTag = require('./../shared/thumb_tag.jsx');
var ThumbFile = require('./../shared/thumb_file.jsx');
var EventListDate = require('./../shared/event_list_date.jsx');
var EventListPrice = require('./../shared/event_list_price.jsx');

var EventList = React.createClass({
  render: function () {
    return (
      <div className="event-list">
        <div className="row primary">
          <div className="remove-event">REMOVE</div>
          <div className="row">
            <div className="title">Study session</div>
          </div>
          <div className="row">
            <div className="location">3525 Trenholme</div>
          </div>
        </div>
        <div className="row secondary">
          <div className="row dates">
            <EventListDate />
          </div>
          <div className="row members">
            <div className="member"><img src="http://placehold.it/500" /></div>
            <div className="member"><img src="http://placehold.it/500" /></div>
            <div className="member"><img src="http://placehold.it/500" /></div>
            <div className="member"><img src="http://placehold.it/500" /></div>
            <div className="member"><img src="http://placehold.it/500" /></div>
          </div>
        </div>
        <div className="row assets">
          <div className="tabs">
            <div className="asset tags">
              <div className="merge-line"></div>
              <div className="asset-wrap">
                <span className="icon fa fa-tag"></span><span className="label">8 Tags</span>
              </div>
            </div>
            <div className="asset files">
              <div className="merge-line"></div>
              <div className="asset-wrap">
                <span className="icon fa fa-file"></span><span className="label">2 Files</span>
              </div>
            </div>
            <div className="asset price">
              <div className="merge-line"></div>
              <div className="asset-wrap">
                <span className="icon fa fa-dollar"></span><span className="label">25</span>
              </div>
            </div>
            <div className="asset members">
              <div className="merge-line"></div>
              <div className="asset-wrap">
                <span className="icon fa fa-user"></span><span className="label">8</span>
              </div>
            </div>
          </div>
          <div className="content hide">
            <div className="content-body">
              <div className="date-set">
                <ThumbFile title="Class notes for exam #1" progress="40" />
                <ThumbFile title="List of choices" progress="70" />
                <ThumbFile title="Math class syllabus" progress="30" />
              </div>
            </div>
            <div className="content-footer">
              <div className="add-tags">Add tags<div className="merge-line"></div></div>
              <div className="add-files">Add files</div>
              <div className="link-date">
                <div className="icon fa fa-calendar-o"></div>
                <div className="title">Link date</div>
                <div className="merge-line"></div>
              </div>
            </div>
            <div className="content-extensions">
              <div className="extension-tags">
                <div className="tags-search">
                  <input type="text" placeholder="Search for tags" className="form-text" />
                </div>
                <ThumbTag title="Education" count="104" />
              </div>
              <div className="extension-dates">
                <div className="extension-date">
                  <EventListDate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventList;
