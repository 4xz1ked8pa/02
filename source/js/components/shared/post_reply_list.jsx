var React = require('react');

var PostReplyList = React.createClass({
  render: function () {
    return (
      <div className="post-reply-list">
        <div className="author-picture"></div>
        <div className="reply-details">
          <div className="author-name">Deborah Miller</div>
          <div className="reply-body">Maecenas elementum metus eu massa tempus, vel volutpat lacus congue. Morbi interdum, arcu vel egestas suscipit.</div>
          <div className="reply-interact">
            <a className="interact-like" href="#">Like</a>
            <a className="interact-comment" href="#">Comment</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PostReplyList;
