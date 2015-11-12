var TopBar = React.createClass({
  render: function () {
    return (
      <div class="topBar">
        <!-- Logo -->
        <div class="logo">
          cursuum
        </div>
        <!-- Identify -->
        <div class="identify">
          <a class="thumb" href="#">
            <img class="image" src="http://placehold.it/16x16" />
            <span class="title">Charles</span>
          </a>
        </div>
        <!-- Notify -->
        <div class="notify">
          <span class="icon fa fa-globe"></span>
          <div class="pane">
            <ul class="tabs">
              <li class="tab">Requests</li>
              <li class="tab">Feed</li>
              <li class="tab">Messages</li>
            </ul>
            <ul class="shown">

            </ul>
            <div class="more">See more</div>
          </div>
        </div>
        <!-- Search -->
        <div class="search">
          <input class="form-text" placeholder="Search for people, schedules, events and more" type="text" />
          <div class="pane">
            <ul class="shown">

            </ul>
            <div class="more">See more</div>
          </div>
        </div>
      </div>
    );
  }
});

module.export = TopBar;