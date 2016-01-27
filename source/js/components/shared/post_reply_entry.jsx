var React = require('react');
var PostEntry = require('./../shared/post_entry.jsx');

var PostReplyEntry = React.createClass({
  render: function () {
    return (
      <div className="post-reply-entry">
        <div className="author-picture"></div>
        <div className="reply-details">
          <PostEntry mode="reply" />
        </div>
      </div>
    );
  }
});

module.exports = PostReplyEntry;
