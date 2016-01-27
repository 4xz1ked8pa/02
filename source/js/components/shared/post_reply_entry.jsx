var React = require('react');
var PostEntry = require('./../shared/post_entry.jsx');

var PostReplyEntry = React.createClass({
  render: function () {
    return (
      <div className="post-reply-entry hide">
        <div className="author-picture"></div>
        <div className="reply-details">
          <PostEntry />
        </div>
      </div>
    );
  }
});

module.exports = PostReplyEntry;
