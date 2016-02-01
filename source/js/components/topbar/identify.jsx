var React = require('react');

var Identify = React.createClass({
  render: function () {
    return (
      <div className="identify">
        <div className="thumb">
          <div className="image">
            <div className="mask"></div>
            <img src="https://avatars3.githubusercontent.com/u/3092838?v=3&s=460" />
          </div>
          <div className="title">Charles Gaudreau Jackson</div>
        </div>
      </div>
    );
  }
});

module.exports = Identify;
