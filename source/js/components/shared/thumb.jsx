var React = require('react');

var Thumb = React.createClass({
 render: function () {
    if (this.props.image) {
		 var image = <img className="image" src={'cursuum.com/img/' + this.props.filename} />;
    }
	if (this.props.icon) {
		 var icon = <span className={'icon fa fa' + this.props.iconname}></span>;
	}
	if (this.props.capsule) {
		 var capsule = <span className="capsule">{this.props.notifycount}</span>;
	}
   	return (
       <div className="thumb">
         <span className="icon fa fa-calendar"></span>
	   {image}
       {icon}
       {capsule}
         <span className="title">{this.props.title}</span>
       </div>
   );
 }
});

module.exports = Thumb;