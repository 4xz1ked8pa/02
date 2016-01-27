var React = require('react');
var PanePrivacySettings = require('./../shared/pane_privacy_settings.jsx');

var ProfileListItemAdd = React.createClass({
  render: function () {
    return (
      <div className="profile-list-add-item">
        <div className="item-details">
          <div className="item-detail">
            <div className="detail-label">Company</div>
            <div className="detail-value">
              <input type="text" placeholder="Where have you worked?" className="form-text" />
              <div className="suggested-results hide">
                <div className="map"></div>
                <div className="result">Sharethebus</div>
                <div className="result">Thirdshelf</div>
                <div className="result">Heroku</div>
                <div className="result">Lightspeed</div>
                <div className="result">Cursuum</div>
              </div>
            </div>
          </div>
          <div className="item-detail">
            <div className="detail-label">Position</div>
            <div className="detail-value"><input type="text" placeholder="What is your job title?" className="form-text" /></div>
          </div>
          <div className="item-detail">
            <div className="detail-label">City/Town</div>
            <div className="detail-value"><input type="text" placeholder="" className="form-text" /></div>
          </div>
          <div className="item-detail">
            <div className="detail-label">Description</div>
            <div className="detail-value"><textarea type="text" placeholder="" className="form-text description"></textarea></div>
          </div>
        </div>
        <div className="details-footer">
          <PanePrivacySettings />
          <a href="#" className="button save">Save Changes</a>
          <a href="#" className="button cancel">Cancel</a>
        </div>
      </div>
    );
  }
});

module.exports = ProfileListItemAdd;
