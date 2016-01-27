var React = require('react');
var ProfileListItem = require('./../main/profile_list_item.jsx');
var PostReplyList = require('./../shared/post_reply_list.jsx');
var PostReplyEntry = require('./../shared/post_reply_entry.jsx');

var ProfileFeedPost = React.createClass({
  render: function () {
    return (
      <div className="profile-feed-post">
        <ProfileListItem title={this.props.author} location={this.props.where} time={this.props.when} />
        <div className="feed-post-content">
          <div className="post-text">{this.props.body}</div>
        </div>
        <div className="feed-post-interact">
          <a className="interact-unfold post-thumb-up">
            <span className="unfold-comments">8 Comments</span>
            <span className="unfold-likes">12 Likes</span>
          </a>
          <a className="interact-option post-thumb-up">
            <span className="option-icon fa fa-thumbs-up"></span>
            <span className="option-title">Like</span>
          </a>
          <a className="interact-option post-bubble">
            <span className="option-icon fa fa-comment"></span>
            <span className="option-title">Comment</span>
          </a>
          <a className="interact-option post-share">
            <span className="option-icon fa fa-share"></span>
            <span className="option-title">Share</span>
          </a>
        </div>
        <div className="feed-post-replies">
          <PostReplyList />
          <PostReplyEntry />
        </div>
      </div>
    );
  }
});

module.exports = ProfileFeedPost;
