var React = require('react');

var Thumb = React.createClass({

  setImage: function() {
    return (
      <div className="image">
        <img src={this.props.filename} />
      </div>
    );
  },
  render: function () {
    var image = (this.props.filename) ? this.setImage() : null;

    if (this.props.iconname) {
      var icon = <span className={'icon fa fa' + this.props.iconname}></span>;
    }
    if (this.props.notifycount) {
      var capsule = <span className="capsule">{this.props.notifycount}</span>;
    }
    if (this.props.remove) {
      var remove = <span className="remove">Remove</span>;
    }
    return (
        <div className="thumb">
          {image}
          {icon}
          <span className="title">{this.props.title}</span>
          {capsule}
          {remove}
        </div>
    );
  }
});

module.exports = Thumb;
