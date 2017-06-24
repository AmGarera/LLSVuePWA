<template>
  <nav class="nav has-shadow transparent">
    <div class="nav-left">
      <a class="nav-item">
        <img src="../../static/img/HP/llslogo.png" alt="Bulma logo">
      </a>

    </div>
    <div class="nav-center">
      <!--Map this to Vue-Router-->
      <a class="nav-item is-tab is-hidden-mobile is-active">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon1.png">
        </figure>Work</a>
      <a class="nav-item is-tab is-hidden-mobile">About</a>
      <a class="nav-item is-tab is-hidden-mobile">Services</a>
      <a class="nav-item is-tab is-hidden-mobile">Blog</a>
      <a class="nav-item is-tab is-hidden-mobile">Contact</a>
      <a class="nav-item is-tab is-hidden-mobile">Shop</a>
    </div>
    <label class="nav-toggle" for="nav-toggle-state">
    </label>

    <!-- This checkbox is hidden -->
    <input type="checkbox" id="nav-toggle-state" />

    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet is-active">Work</a>
      <a class="nav-item is-tab is-hidden-tablet">About</a>
      <a class="nav-item is-tab is-hidden-tablet">Services</a>
      <a class="nav-item is-tab is-hidden-tablet">Blog</a>
      <a class="nav-item is-tab is-hidden-tablet">Contact</a>
      <a class="nav-item is-tab is-hidden-tablet">Shop</a>
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
.nav-toggle:before { content:'\2630'; }

#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}
</style>
