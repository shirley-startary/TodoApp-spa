const Navbar = {
  render: async () => {
    return `<nav>
              <div class="nav-wrapper">
                  

                <a href="#/" class="brand-logo"><i class="material-icons">cloud</i>ToDo app</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

                <ul class="right hide-on-med-and-down">
                  <li><a href="#/">All</a></li>
                  <li><a href="#/active">Active</a></li>
                  <li><a href="#/completed">Completed</a></li>
                </ul>
              </div>         
            </nav>

            <ul class="sidenav" id="mobile-demo">
                  <li><a href="#/">All</a></li>
                  <li><a href="#/active">Active</a></li>
                  <li><a href="#/completed">Completed</a></li>
            </ul>`;
  },
  after_render: () => {}
};
export default Navbar;
