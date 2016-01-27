var React = require('react');
var PaneItem = require('./../shared/pane_item.jsx');

var Pane = React.createClass({
  render: function () {
    if (this.props.pointer) {
      if (this.props.pointer == "top") {
        var pointer = <div className="pane-pointer top"></div>;
      }
    }
    if (this.props.tabs) {
      if (this.props.tabs == 3) {
        var tabs =
        <div className="pane-tabs three">
          <a className="pane-tab">{this.props.tab1}</a>
          <a className="pane-tab">{this.props.tab2}</a>
          <a className="pane-tab">{this.props.tab3}</a>
        </div>;
      }
      if (this.props.tabs == 2) {
        var tabs =
        <div className="pane-tabs two">
          <a className="pane-tab">{this.props.tab1}</a>
          <a className="pane-tab">{this.props.tab2}</a>
        </div>;
      }
    }
    return (
    <div className="pane">
      {pointer}
      {tabs}
      <div className="shown">
        <div className="pane-header">
          <span>People</span>
        </div>
        <div className="pane-list">
          <PaneItem title="Charles Gaudreau Jackson" subTitle="Concordia University" context="request"/>
          <PaneItem title="Olivier Maltais" subTitle="University of Montreal" context="request" />
          <PaneItem title="Geoffroy Bergeron" subTitle="University of Montreal" context="request" />
          <PaneItem title="Harris Robin Kalash" subTitle="Thirdshelf" context="request" />
        </div>
      </div>
      <div className="more">See more</div>
    </div>
    );
  }
});

module.exports = Pane;
