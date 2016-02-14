var React = require('react');
var PrivacyOptions = require('./../shared/privacy_options.jsx');
var ProfileFeedPost = require('./../main/profile_feed_post.jsx');
var PostEntry = require('./../shared/post_entry.jsx');

var ProfileUserFeed = React.createClass({
  render: function () {
    return (
      <div className="profile-core profile-user-feed">
        <div className="profile-feed">
          <PostEntry />
          <div className="feed-posts">
            <ProfileFeedPost author="Julian Dennis" when="7 hours ago" where="Montreal" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum, metus vel blandit fringilla, est risus ultrices leo, sit amet luctus ante tortor nec quam. Maecenas venenatis laoreet purus, ac faucibus." />
            <ProfileFeedPost author="Charles Gaudreau Jackson" when="9 hours ago" where="Montreal" body="Integer feugiat maximus ligula, et vehicula nunc. Etiam fringilla nulla nec odio consequat sollicitudin. Phasellus placerat eget nulla ut ultricies." />
            <ProfileFeedPost author="Wesley Harris" when="13 hours ago" where="Montreal" body="Suspendisse pellentesque tincidunt lorem cursus egestas. Morbi vel dui iaculis, tempor ante sit amet, facilisis urna. Maecenas ut orci mauris." />
            <ProfileFeedPost author="Christie Duncan" when="2 days ago" where="Montreal" body="Quisque condimentum scelerisque arcu, ut tristique augue imperdiet eu. Etiam ultrices ullamcorper odio, in imperdiet orci varius vitae. Maecenas elementum metus eu massa tempus, vel volutpat lacus congue interdum arcu." />
          </div>
        </div>
        <div className="profile-assets">
          <div className="assets-group">
            <div className="group-header">
              <div className="header-title">Friends</div>
              <div className="header-count">256</div>
              <div className="header-mutual">27 mutual</div>
            </div>
            <div className="group-list">
              <div className="list-item">
                <div className="item-title">Howard Foster</div>
              </div>
              <div className="list-item">
                <div className="item-title">Norma Shelton</div>
              </div>
              <div className="list-item">
                <div className="item-title">Christie Duncan</div>
              </div>
              <div className="list-item">
                <div className="item-title">Welsey Harris</div>
              </div>
              <div className="list-item">
                <div className="item-title">Alvin Swanson</div>
              </div>
              <div className="list-item">
                <div className="item-title">Julian Dennis</div>
              </div>
              <div className="list-item">
                <div className="item-title">Lenna Murray</div>
              </div>
              <div className="list-item">
                <div className="item-title">Jesse Smith</div>
              </div>
            </div>
          </div>
          <div className="assets-group">
            <div className="group-header">
              <div className="header-title">Photos</div>
              <div className="header-count">74</div>
            </div>
            <div className="group-list">
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
              <div className="list-item"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProfileUserFeed;
