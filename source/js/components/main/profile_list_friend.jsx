var React = require('react');
var ConnectionAdd = require('./../shared/connection_add.jsx');
var ConnectionOptions = require('./../shared/connection_options.jsx');

var ProfileListFriend = React.createClass ({
  render: function () {
    var connectionTrigger = <ConnectionAdd />;
    if (this.props.connected) {
      var connectionTrigger = <ConnectionOptions connected={this.props.connected}/>;
    }
    return (
      <div className="profile-list-friend">
        <div className="friend-picture"></div>
        <div className="friend-details">
          <div className="details-row">
            <div className="detail friend-title">{this.props.title}</div>
          </div>
          <div className="details-row">
            <div className="detail mutual-friends">{this.props.mutual}</div>
          </div>
          <div className="details-row">
            {connectionTrigger}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileListFriend;
