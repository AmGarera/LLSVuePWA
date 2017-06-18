<template>
  <nav class="nav has-shadow transparent">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
      <!--Map this to Vue-Router-->
      <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
      <a class="nav-item is-tab is-hidden-mobile">Features</a>
      <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
      <a class="nav-item is-tab is-hidden-mobile">About</a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
      <a class="nav-item is-tab is-hidden-tablet">Features</a>
      <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
      <a class="nav-item is-tab is-hidden-tablet">About</a>
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
