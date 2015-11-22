var React = require('react');

var Thumb = React.createClass({
  render: function () {
    if (this.props.filename) {
      var image = <img className="image" src={'http://placehold.it/100x100'}/>;
    }
    if (this.props.iconname) {
      var icon = <span className={'icon fa fa' + this.props.iconname}></span>;
    }
    if (this.props.notifycount) {
      var capsule = <span className="capsule">{this.props.notifycount}</span>;
    }
    if (this.props.canRemove) {
      var canRemove = <span className="close">[x]</span>;
    }
    return (
        <div className="thumb">
          {image}
          {icon}
          <span className="title">{this.props.title}</span>
          {capsule}
          {canRemove}
        </div>
    );
  }
});

module.exports = Thumb;