<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                Jhon
                <strong>Smith</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li class="sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-chart-line"></i>
                  <span class="menu-text">Overview</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-amazon"></i>
                  <span class="menu-text">Products</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Orders</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-power-off"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Pro Sidebar</h2>
              <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
            </div>
          </div>
        </div>
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "home",
  components: {
    Hero
  },
  methods: {
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    }
  }
};
</script>

<style></style>
