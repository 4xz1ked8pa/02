var React = require('react');

var Thumb = React.createClass({
  render: function () {
    return (
        <div className="thumb">
          <span className="icon fa fa-calendar"></span>
          (this.props.image == True):
            <img className="image" src='cursuum.com/img/' + {this.props.filename} />
          ?;
          (this.props.icon):
            <span className='icon fa fa' + {this.props.iconname}></span>
          ?;
          (this.props.capsule):
            <span className="capsule">{this.props.notify.count}</span>
          ?;
          <span className="title">{this.props.title}</span>
        </div>
    );
  }
});

module.exports = Thumb;