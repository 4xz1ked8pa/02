// Root components of UI
var React = require('react');
var TopBar = require('./topbar/topbar.jsx');
var ChatBar = require('./chatbar/chatbar.jsx');
var SideBar = require('./sidebar/sidebar.jsx');
var Main = require('./main/main.jsx');


var Root = React.createClass({displayName: 'Root',
	render: function() {
		return <div className="root">
			<TopBar />
			<SideBar/>
			<Main />
			<ChatBar />
		</div>;
	}
});

module.exports = Root;
