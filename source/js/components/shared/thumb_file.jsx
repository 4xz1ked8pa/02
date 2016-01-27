var React = require('react');

var ThumbFile = React.createClass({
  render: function () {
    var currentProgress = this.props.progress + "%";
    return (
      <div className="thumbFile">
        <div className="file-caption">
          <div className="caption-wrap">
            <img src="http://placehold.it/500x380?text=PICTURE" />
          </div>
        </div>
        <div className="file-title">{this.props.title}</div>
        <div className="file-progress">
          <div className="current-progress" style={{width:currentProgress}}></div>
        </div>
        <div className="file-remove">REMOVE</div>
      </div>
    );
  }
});

module.exports = ThumbFile;
