var React = require('react');

var ProfileListItem = React.createClass({
  render: function () {
    var headerClass = "profile-list-item";
    if (this.props.type) {
      var itemType = this.props.type;
      if (itemType == "family") {
        var headerClass = "profile-list-item family-item";
      }
      if (itemType == "relationship") {
        var headerClass = "profile-list-item relationship";
      }
    }
    if (this.props.since) {
      var itemSince = <div className="item-detail item-since">since {this.props.since}</div>;
    }
    if (this.props.time) {
      var itemTime = <div className="item-detail item-time link">{this.props.time}</div>;
    }
    if (this.props.subtitle) {
      var itemSubtitle = <div className="item-detail item-subtitle link"><div className="dot">·</div>{this.props.subtitle}</div>;
    }
    if (this.props.location) {
      var itemLocation = <div className="item-detail item-location link"><div className="dot">·</div>{this.props.location}</div>;
    }
    return (
      <div className={headerClass}>
        <div className="item-picture"></div>
        <div className="item-details">
          <div className="details-row">
            <div className="item-detail item-title link">{this.props.title}</div>
          </div>
          <div className="details-row">
            {itemTime}
            {itemSubtitle}
            {itemLocation}
            {itemSince}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileListItem;
