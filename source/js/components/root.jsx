// Root component of UI
var React = require('react');
var TopBar = require('./topbar/topbar.jsx');
//var ChatBar = require('./chatbar/chatbar.jsx');
//var Sidebar = require('./sidebar/sidebar.jsx');
//var Main = require('./main/main.jsx');


var Root = React.createClass({displayName: 'Root',
	render: function() {
		return <div>
			<TopBar />
		</div>;
	}
});

module.exports = Root;

/* 			<TopBar />
			<SideBar />
			<Main />
			<ChatBar />
*/