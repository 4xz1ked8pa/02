var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var TopBar = React.createClass({
  render: function () {
    return (
      <div className="topBar">
        <div className="logo">cursuum</div>
        <div className="identify">
          <div className="thumb">
            <div className="image">
              <div className="mask"></div>
              <img src="https://avatars3.githubusercontent.com/u/3092838?v=3&s=460" />
            </div>
            <div className="title">Charles Gaudreau Jackson</div>
          </div>
        </div>
        <div className="search active">
          <input className="form-text" placeholder="Search for people, schedules, events and more" type="text" />
          <div className="pane">
            <ul className="shown">
              <div className="pane-header">
                <span>People</span>
              </div>
              <div className="pane-list">
                <div className="pane-item">
                  <div className="pane-picture"></div>
                  <div className="pane-infos">
                    <div className="row">
                      <div className="title">Charles Gaudreau Jackson</div>
                    </div>
                    <div className="row">
                      <div className="subtitle">Concordia University</div>
                    </div>
                  </div>
                </div>
                <div className="pane-item">
                  <div className="pane-picture"></div>
                  <div className="pane-infos">
                    <div className="row">
                      <div className="title">Geoffroy Bergeron</div>
                    </div>
                    <div className="row">
                      <div className="subtitle">University of Montreal</div>
                    </div>
                  </div>
                </div>
                <div className="pane-item">
                  <div className="pane-picture"></div>
                  <div className="pane-infos">
                    <div className="row">
                      <div className="title">Harris Robin Kalash</div>
                    </div>
                    <div className="row">
                      <div className="subtitle">Thirdshelf</div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <div className="more">See more</div>
          </div>
        </div>
        <div className="notify">
          <a href="#" className="trigger fa fa-globe"></a>
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
      </div>
    );
  }
});

module.exports = TopBar;
