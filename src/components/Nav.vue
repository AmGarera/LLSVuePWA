<template>
  <nav class="nav has-shadow transparent">
    <div class="nav-left">
      <a href="/" class="nav-item">
        <img style="max-height: 2.75em" src="../../static/img/HP/llslogo.png" alt="Bulma logo">
      </a>

    </div>
    <div class="nav-center">
      <!--Map this to Vue-Router-->
      <router-link to="/Work" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon1.png"
               onmouseover="this.src='../../static/img/HP/icon1_green.png'"
               onmouseout="this.src='../../static/img/HP/icon1.png'">
        </figure><strong>WORK</strong></a>
      </router-link>
      <router-link to="/About" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
        <img src="../../static/img/HP/icon2.png"
             onmouseover="this.src='../../static/img/HP/icon2_green.png'"
             onmouseout="this.src='../../static/img/HP/icon2.png'">
      </figure><strong>ABOUT</strong></a>
      </router-link>
      <router-link to="/Services" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon3.png"
               onmouseover="this.src='../../static/img/HP/icon3_green.png'"
               onmouseout="this.src='../../static/img/HP/icon3.png'">
        </figure><strong>SERVICES</strong></a>
      </router-link>
      <router-link to="/Blog" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon4.png"
               onmouseover="this.src='../../static/img/HP/icon4_green.png'"
               onmouseout="this.src='../../static/img/HP/icon4.png'">
        </figure><strong>BLOG</strong></a>
      </router-link>
      <router-link to="/Contact" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon5.png"
               onmouseover="this.src='../../static/img/HP/icon5_green.png'"
               onmouseout="this.src='../../static/img/HP/icon5.png'">
        </figure><strong>CONTACT</strong></a>
      </router-link>
      <router-link to="/Shop" class="" tag="div" exact>
      <a class="nav-item is-tab is-hidden-mobile">
        <figure class="image is-32x32" style="margin-right: 2px;">
          <img src="../../static/img/HP/icon6.png"
               onmouseover="this.src='../../static/img/HP/icon6_green.png'"
               onmouseout="this.src='../../static/img/HP/icon6.png'">
        </figure><strong>SHOP</strong></a>
      </router-link>
    </div>
    <label class="nav-toggle" for="nav-toggle-state">
    </label>

    <!-- This checkbox is hidden -->
    <input type="checkbox" id="nav-toggle-state" />

    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-paddingless">
        <figure class="image is-32x32" >
          <img src="../../static/img/HP/instagram.png" alt="Instagram Icon">
      </figure></a>
      <a class="nav-item is-tab is-paddingless">
        <figure class="image is-32x32" >
          <img src="../../static/img/HP/facebook.png" alt="Facebook Icon">
      </figure></a>
      <a class="nav-item is-tab is-paddingless">
        <figure class="image is-32x32" >
          <img src="../../static/img/HP/twitter.png" alt="Twitter Icon">
      </figure></a>
      <a class="nav-item is-tab is-paddingless">
        <figure class="image is-32x32" >
          <img src="../../static/img/HP/Pinteresticon.png" alt="Pinterest Icon">
      </figure></a>
      <a class="nav-item is-tab is-paddingless">
        <figure class="image is-32x32">
          <img src="../../static/img/HP/Dribbble.png" alt="Dribble Icon">
      </figure></a>
      <!--Mobile Menu-->
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

<style lang="scss" scoped>
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
nav {
  width: 100%;
  position: fixed;
  background: #fff;
  opacity: .8;
}
.nav-item{
  font-family: Montserrat;
}
a.nav-item.is-tab
{
  border-bottom: none;
}

 strong {
   color: #d3d3d3
 ; }
  strong:hover {
    color: #4cc1a1;
  }
  figure:hover {
    color: #1ca64c;
  }
</style>
