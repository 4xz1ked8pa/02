var SideBar = React.createClass({
  render: function () {
    return (
        <div class="sideBar">
          <div class="access-module">
            <!-- Events -->
            <div class="thumb">
              <span class="icon fa fa-calendar"></span>
              <span class="title">Events</span>
              <span class="capsule">9</span>
            </div>
            <!-- Groups -->
            <div class="thumb">
              <span class="icon fa fa-calendar"></span>
              <span class="title">Groups</span>
              <span class="capsule">3</span>
            </div>
            <!-- People -->
            <div class="thumb">
              <span class="icon fa fa-calendar"></span>
              <span class="title">People</span>
              <span class="capsule">6</span>
            </div>
          </div>
          <div class="access-module">
            <div class="thumb">
              <span class="title">McGill Students Association</span>
              <span class="capsule">6</span>
            </div>
            <div class="thumb">
              <span class="icon fa fa-calendar"></span>
              <span class="title">Code jams</span>
              <span class="capsule">6</span>
            </div>
            <div class="thumb">
              <span class="icon fa fa-calendar"></span>
              <span class="title">Montreal couch surfing</span>
              <span class="capsule">6</span>
            </div>
          </div>
          <div class="manage-filters">
            <div class="thumb">
              <span class="title">Charles Gaudreau Jackson</span>
              <span class="close fa fa-close"></span>
            </div>
          </div>
          <div class="jump-calendar monthly">
            <div class="header">
              <span class="fa fa-chevron-left"></span>
              <div class="title">
                <span class="month">November</span>
                <span class="year">2015</span>
              </div>
              <span class="fa fa-chevron-right"></span>
            </div>
            <ul class="jump-grid">

            </ul>
          </div>
          <ul class="interact">
            <span class="option add-event"></span>
            <span class="option add-filter"></span>
            <span class="option add-stack"></span>
            <span class="access-settings"></span>
          </ul>
        </div>
    );
  }
});

module.export = SideBar;