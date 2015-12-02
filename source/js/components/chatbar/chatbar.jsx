var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var ChatBar = React.createClass({
  render: function () {
    return (
      <div className="chatBar">
        <div className="online">
          <Thumb title="Nathan	Holt" filename="http://placehold.it/500?text=PICTURE" notifycount="8"  />
          <Thumb title="Deborah	Miller" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Julian	Dennis" filename="http://placehold.it/500?text=PICTURE" notifycount="12"  />
          <Thumb title="Jean	Klein" filename="http://placehold.it/500?text=PICTURE" notifycount="3"  />
          <Thumb title="Christie	Duncan" filename="http://placehold.it/500?text=PICTURE" />
          <Thumb title="Angelo	Foster" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Jonathan	Brown" filename="http://placehold.it/500?text=PICTURE" notifycount="6"  />
          <Thumb title="Harry	Hill" filename="http://placehold.it/500?text=PICTURE" notifycount="14"  />
          <Thumb title="Jesse	Smith" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Howard	Foster" filename="http://placehold.it/500?text=PICTURE"  />
        </div>
        <div className="offline">
          <Thumb title="Jason	Craig" filename="http://placehold.it/500?text=PICTURE" notifycount="9"  />
          <Thumb title="Terrell	Carpenter" filename="http://placehold.it/500?text=PICTURE" notifycount="17"  />
          <Thumb title="Caleb	Freeman" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Norma	Shelton" filename="http://placehold.it/500?text=PICTURE" notifycount="4"  />
          <Thumb title="Wesley	Harris" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Lena	Murray" filename="http://placehold.it/500?text=PICTURE" notifycount="1"  />
          <Thumb title="Mack	Wong" filename="http://placehold.it/500?text=PICTURE" notifycount="9"  />
          <Thumb title="Alvin	Swanson" filename="http://placehold.it/500?text=PICTURE"  />
          <Thumb title="Barry	Clarke" filename="http://placehold.it/500?text=PICTURE" notifycount="6"  />
        </div>
        <div className="interact">
          <div className="search">
            <input className="form-text" placeholder="Search members" type="text" />
          </div>
          <div className="option compose fa fa-pencil"></div>
          <div className="option status available fa fa-circle"></div>
        </div>
      </div>
    );
  }
});

module.exports = ChatBar;
