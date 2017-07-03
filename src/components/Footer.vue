<template>
  <footer class="footer">
    <!--True Footer-->
    <div class="columns">
      <div class="column is-3">
        <p style="text-indent: 25px" class="has-text-centered Karla-font" >&copy; Long Live Simple, LLC 2017</p>
        <p style="text-indent: 25px" class="has-text-centered Karla-font" > All Rights Reserved | Legal</p>
        <ul class=" has-text-centered">
          <li><img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg" class="image is-64x64" alt="Go Local Here 2017"></li>
          <li><img src="../../static/img/HP/MountainBizWorks_Footer.png" class="image is-64x64" alt="Go Local Here 2017"></li>
        </ul>
      </div>
      <div class="column is-6">
        <p class="subtitle has-text-centered Karla-font"> <span class="footer-hover"> <router-link to="/About">Site Credits</router-link> </span> | <span class="footer-hover" onclick="alertCustom()" >FAQ's</span> | <span class="footer-hover"><router-link to="/Services">Testimonials</router-link></span> | <span class="footer-hover">Client Login</span></p>
      </div>
      <div class="column">
        <p class="subtitle has-text-centered Karla-font">Socialize with us:</p>
        <ul class=" has-text-centered">
          <li><a href="https://www.instagram.com/longlivesimple"><img src="../../static/img/HP/instagram.png" class="image is-32x32" alt="Instagram Icon"></a></li>
          <li><a href="https://www.facebook.com/longlivesimple"><img src="../../static/img/HP/facebook.png" class="image is-32x32" alt="Facebook Icon"></a></li>
          <li><a href="https://www.twitter.com/longlivesimple"><img src="../../static/img/HP/twitter.png" class="image is-32x32" alt="Twitter Icon"></a></li>
          <li><a href="https://www.pinterest.com/longlivesimple"><img src="../../static/img/HP/Pinteresticon.png" class="image is-32x32" alt="Pinterest Icon"></a></li>
          <li><a href="https://www.dribbble.com/longlivesimple"><img src="../../static/img/HP/Dribbble.png" class="image is-32x32" alt="Dribble Icon"></a></li>
        </ul>
      </div>
    </div>
<!--<insta></insta>-->
    <back-top>
      <i id="myBtn" class="fa fa-arrow-up" aria-hidden="true"></i>
    </back-top>
  </footer>
</template>

<script>
  import BackTop from './BackTop'
//  import Insta from './insta'
// eslint-disable-next-line no-labels
  export default {
    methods: {
      alertCustom () {
        this.$dialog.alert('Everything looks fine!')
      }},
    name: 'footerCustom',
    components: {
//      Insta,
      BackTop}
  }
</script>

<style scoped>
li {
  display: inline-block;
}
  .Karla-font {
    font-family: 'Karla', sans-serif;
  }
  .footer-hover:hover {
    color: #4cc1a1;
  }
#myBtn {
 /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: RGB(76,191,160); /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
.slick-container {
  height: 60%;
}
a {
  color: #4a4a4a;
}
  a:hover {
    color: #42b983;
  }
</style>
