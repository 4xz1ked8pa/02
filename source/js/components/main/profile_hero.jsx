var React = require('react');

var ProfileHero = React.createClass({
  render: function () {
    return (
      <div className="user-hero">
        <div className="profile-picture">
          <div className="picture-wrap"></div>
        </div>
        <div className="identify-user">
          <div className="user-name"><span className="name-wrap">Charles Gaudreau Jackson</span><div className="user-status"><span className="status-wrap fa fa-check-circle"></span></div></div>
          <div className="user-network">Concordia University</div>
          <div className="user-interact">
            <div className="button add-friend">ADD FRIEND</div>
            <div className="button message-user">MESSAGE</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileHero;
