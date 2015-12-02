var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var SideBar = React.createClass({
  render: function () {
    return (
        <div className="sideBar">
          <div className="access-module">
            <div className="access-header">Suggested</div>
            <Thumb title="Events" iconname="calendar" notifycount="1" capsule="True"/>
            <Thumb title="People" iconname="bubble" notifycount="3" capsule="True"/>
            <Thumb title="Groups" iconname="team" notifycount="2" capsule="True"/>
          </div>
          <div className="access-module">
            <div className="access-header">Groups</div>
            <Thumb title="McGill University Association" iconname="calendar" notifycount="2" />
            <Thumb title="Code Jams" iconname="calendar" />
            <Thumb title="2600 The Hacker Quartely" iconname="calendar" notifycount="1" />
            <Thumb title="Web Cats Community" iconname="calendar" notifycount="7" />
          </div>
          <div className="manage-filters">
            <div className="access-header">Filters</div>
            <Thumb title="Charles Gaudreau Jackson" canRemove />
            <Thumb title="Technology" canRemove />
            <Thumb title="Rainy weather" canRemove />
          </div>
          <div className="jump-calendar monthly">
            <div className="header">
              <span className="back fa fa-chevron-left"></span>
              <div className="title">
                <span className="month">November</span>
                <span className="year">2015</span>
              </div>
              <span className="next fa fa-chevron-right"></span>
            </div>
            <ul className="labels">
              <li className="label">S</li>
              <li className="label">M</li>
              <li className="label">T</li>
              <li className="label">W</li>
              <li className="label">T</li>
              <li className="label">F</li>
              <li className="label">S</li>
            </ul>
            <div className="grid">
              <ul className="week row">
                <li className="block">1</li>
                <li className="block">2</li>
                <li className="block">3</li>
                <li className="block">4</li>
                <li className="block">5</li>
                <li className="block">6</li>
                <li className="block">7</li>
              </ul>
              <ul className="week row">
                <li className="block">8</li>
                <li className="block">9</li>
                <li className="block">10</li>
                <li className="block">11</li>
                <li className="block">12</li>
                <li className="block">13</li>
                <li className="block">14</li>
              </ul>
              <ul className="week row current">
                <li className="block">15</li>
                <li className="block">16</li>
                <li className="block">17</li>
                <li className="block">18</li>
                <li className="block">19</li>
                <li className="block">20</li>
                <li className="block">21</li>
              </ul>
              <ul className="week row">
                <li className="block">22</li>
                <li className="block">23</li>
                <li className="block">24</li>
                <li className="block">25</li>
                <li className="block">26</li>
                <li className="block">27</li>
                <li className="block">28</li>
              </ul>
              <ul className="week row">
                <li className="block">29</li>
                <li className="block">30</li>
                <li className="block offset">1</li>
                <li className="block offset">2</li>
                <li className="block offset">3</li>
                <li className="block offset">4</li>
                <li className="block offset">5</li>
              </ul>
            </div>
          </div>
          <ul className="interact">
            <span className="option add-event fa fa-calendar-plus-o"></span>
            <span className="option add-filter fa fa-clone"></span>
            <span className="option access-settings fa fa-cog"></span>
          </ul>
        </div>
    );
  }
});

module.exports = SideBar;
