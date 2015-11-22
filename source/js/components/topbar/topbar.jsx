var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className="topBar">
        <div className="logo">
          cursuum
        </div>
        <div className="identify">
          <Thumb title="Charles" filename="profile1.jpg"/>
        </div>
        <div className="notify">
          <span className="icon fa fa-globe"></span>
          <div className="pane">
            <ul className="tabs">
              <li className="tab">Requests</li>
              <li className="tab">Feed</li>
              <li className="tab">Messages</li>
            </ul>
            <ul className="shown">

            </ul>
            <div className="more">See more</div>
          </div>
        </div>
        <div className="search">
          <input className="form-text" placeholder="Search for people, schedules, events and more" type="text" />
          <div className="pane">
            <ul className="shown">

            </ul>
            <div className="more">See more</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TopBar;