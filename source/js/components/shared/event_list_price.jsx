var React = require('react');

var EventListPrice = React.createClass({
  render: function () {
    return (
      <div className="event-list-price folded">
        <div className="primary">
          <div className="price-currency">$</div>
          <div className="price-value">
            <input type="text" placeholder="0" className="form-text" />
          </div>
          <div className="price-code">CAD</div>
        </div>
        <div className="select-currrency"></div>
        <div className="select-code"></div>
      </div>
    );
  }
});

module.exports = EventListPrice;
