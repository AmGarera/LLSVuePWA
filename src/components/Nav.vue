<template>
  <nav class="nav has-shadow transparent">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
      <!--Map this to Vue-Router-->
      <a class="nav-item is-tab is-hidden-mobile is-active">Work</a>
      <a class="nav-item is-tab is-hidden-mobile">About</a>
      <a class="nav-item is-tab is-hidden-mobile">Services</a>
      <a class="nav-item is-tab is-hidden-mobile">Blog</a>
      <a class="nav-item is-tab is-hidden-mobile">Contact</a>
      <a class="nav-item is-tab is-hidden-mobile">Shop</a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet is-active">Work</a>
      <a class="nav-item is-tab is-hidden-tablet">About</a>
      <a class="nav-item is-tab is-hidden-tablet">Services</a>
      <a class="nav-item is-tab is-hidden-tablet">Blog</a>
      <a class="nav-item is-tab is-hidden-tablet">Contact</a>
      <a class="nav-item is-tab is-hidden-tablet">Shop</a>
      <a class="nav-item is-tab">
        <figure class="image is-16x16" style="margin-right: 8px;">
          <img src="http://bulma.io/images/jgthms.png">
        </figure>
        Profile
      </a>
      <a class="nav-item is-tab">Log out</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navigationMenu'
}
</script>

<style scoped>
.container {
background:rgba(255,255,255,0.5);
}
</style>
