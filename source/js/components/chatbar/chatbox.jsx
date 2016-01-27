var React = require('react');
var Thumb = require('./../shared/thumb.jsx');

var ChatBox = React.createClass({
  render: function () {
    var chatBoxStatus = 'chatBox ' + this.props.status + ' ' + this.props.fold;
    return (
      <div className={chatBoxStatus}>
        <div className="header">
          <div className="title">{this.props.who}</div>
          <div className="close fa fa-close"></div>
          <div className="add-member fa fa-user-plus"></div>
        </div>
        <div className="thread">
          <div className="message">
            <Thumb title="Lorem ipsum dolor sit amet." filename="http://placehold.it/500?text=PICTURE" />
          </div>
          <div className="message">
            <Thumb title="Ut enim ad minim veniam." filename="http://placehold.it/500?text=PICTURE" />
          </div>
          <div className="message own lifted">
            <Thumb title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." filename="http://placehold.it/500?text=PICTURE" />
          </div>
        </div>
        <div className="interact">
          <input className="form-text" placeholder="Type a message" type="text" />
          <span className="add-file fa fa-picture-o"></span>
        </div>
      </div>
    );
  }
});

module.exports = ChatBox;
