<template>
  <div class="hello">
    <section style="background-color: RGB(230, 238, 236)" class="hero">
      <div class="hero-body is-small">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../../static/img/HP/hero1.svg" alt=""></swiper-slide>
          <swiper-slide><img src="../../static/img/HP/hero2.svg" alt=""></swiper-slide>
          <swiper-slide><img src="../../static/img/HP/hero3.svg" alt=""></swiper-slide>
          <swiper-slide><img src="../../static/img/HP/hero4.svg" alt=""></swiper-slide>
          <!--<swiper-slide><img src="../../static/img/HP/hero5.svg" alt=""></swiper-slide>-->
          <swiper-slide><img src="../../static/img/HP/hero6.svg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <!--<div class="swiper-pagination"  slot="pagination"></div>-->
          <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--<div class="swiper-button-next" slot="button-next"></div>-->
          <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
      </div>
    </section>

    <section class="hero is-medium lls-intro">


      <div class="container is-fluid">
      <div class="columns is-gapless">
        <div class="column is-half">
          <img src="../../static/img/HP/WeareLongLiveSimple_content.png" alt="">
          <!--<p class="tile title flex has-text-centered">-->
            <!--We are Long Live Simple, a creative and strategic graphic design studio.-->
          <!--</p>-->
          <a href="/About"><b><p class="more-about-us">More About Us ></p></b></a>
        </div>
        <div class="column is-half">
          <div class="tile is-parent">
            <article class="tile is-child">
              <!--<p class="title">Wide tile</p>-->

              <div class="content">
                <p style="padding-top: 20px; font-size: large" class="has-text-left is-hidden-mobile">
                  Here at Long Live Simple, we believe brands should tell stories.
                  Whether your brand is an extension of what you do, a reflection of
                  your personality or a platform to your ideal audience, we love
                  creating unique, hand-drawn logos and custom work so our clients can have a symbol that represents who they are and what
                  they do. We offer meaningful experiences for customer-driven
                  and thoughtful brands.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
    </section>
<section style="padding-bottom: 40px; padding-top: 40px" class="hero is-medium what-we-offer">
  <br>
<h2 class="title what-we-offer-text big-font"><b>WHAT WE OFFER:</b></h2>
  <div class="columns">
<ul class="column">
</ul>

    <ul class="column white-text">
      <li>Branding Packages</li>
      <li>Print Collateral Design</li>
      <li>Custom Illustration</li>
      <li>Custom Iconography</li>
    </ul>

    <div class="divider-line "></div>

    <ul class="column white-text">
  <li>Web Design</li>
  <li>Social Media Setup</li>
  <li>Brand Strategy Consulting</li>
  <li>User Experience Consulting</li>
</ul>

  <ul class="column">
  </ul>
  </div>
  <div>
    <br>
    <router-link to="/services"><p class="white-text white-box listOfServices"><strong class="white-text green-hover">See our full list of services ></strong></p></router-link>
  </div>
</section>

    <section>
      <div class="container is-fluid">

        <p> Simple Graphic design solutions for
          <img src="../../static/img/HP/extraordinary-brands.png" alt="">
        </p>
      </div>
    </section>
<section class="hero is-medium">
 <div class="columns is-gapless">
  <div style="background: #E2F2EA;" class="column">
    <router-link to="/About">
    <img src="../../static/img/HP/LocalFeatures.png" alt="Local Features">
    </router-link>
  </div>
  <div style="background-color: #4CBFA0" class="column">
    <router-link to="/About">
    <img src="../../static/img/HP/SustainablePractices.png" alt="Sustainable Practices">
    </router-link>
  </div>
  <div style="background: #A1D7CA;" class="column">
    <router-link to="/About">
    <img src="../../static/img/HP/CommunityFocused.png" alt="Community Focused">
    </router-link>

  </div>
</div>
</section>
    <section class="newsletter-section">
      <div class="columns white-text">
        <div class="column">
          <p class="has-text-left"><b>Sign up for our newsletter to receive <br>branding insights. freebies, and happenings.</b></p>
        </div>
        <div class="column">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <!--<label class="label">From</label>-->
        </div>
        <div class="field-body">
          <div class="field is-grouped">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Name">
              <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" value="">
              <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
              <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
            </p>
          </div>

        </div>
      </div>
        </div>
        <!----></div>
      <div class="columns">
      <div class="column is-6">
        <p class="has-text-left white-text"><i>We aren't the spamming type.</i></p>
      </div>
<div class="column is-hidden-mobile"></div>
        <div class=" column is-5">
          <div class="has-text-centered">
            <!-- Left empty for spacing -->
            <router-link to="/services"><p class="white-text white-box listOfServices"><strong class="white-text green-hover">Get Notified ></strong></p></router-link>
          </div>
        </div>
      </div>

      <div class="columns container">
        <div class=" column ">
          <div class="">
            <!-- Left empty for spacing -->
          </div>
        </div>

        <div class=" column">
          <div class="">
            <!-- Left empty for spacing -->
            <div class="field has-addons has-addons-centered">
              <div class="control">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
<!--End of First Hero-->

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'hello',
    components: { swiper, swiperSlide },
    data () {
      return {
        swiperOption: {
          preloadImages: false,
          lazyLoading: true
        }
      }
    },

  // All slick methods can be used too, example here
    methods: {
//      next () {
//        this.$refs.slick.next()
//      },
//
//      prev () {
//        this.$refs.slick.prev()
//      },
//
//      reInit () {
//      // Helpful if you have to deal with v-for to update dynamic lists
//        this.$refs.slick.reSlick()
//      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*Section Title*/

.white-box {
  color: white;
  border: 1px solid white;
  display: inline-block;
  padding: 17px;
}
.hero-foot{
background-color: black;
opacity: .5;
}
 .white-text {
   font-size: 20px;
   color: #fff;
   font-family: 'Karla', sans-serif;
 }
ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: RGB(76,191,160);
}
.brand-story {
  background-image: url('https://unsplash.it/1920/1080');
}
.what-we-offer {
  background-image: url('../../static/img/HP/whatweoffer.png');
}
.what-we-offer-text {
  color: #fff;
  padding-bottom: 30px;
}
  .listOfServices {

  }
  .listOfServices:hover {
    background-color: white;
  }
  .green-hover:hover {
    color: RGB(76,191,160);

  }
  .lls-intro {
    background-color: RGB(230,238,236);
  }

  .divider-line {
    /*position:absolute;*/
    left:50%;
    top:10%;
    bottom:10%;
    border-left:1px solid white;
  }
  .more-about-us {
    font-size: x-large;
    transform: translate(20%, -40%);
    padding-bottom: 20px;
  }
  .more-about-us:hover {
    color: #a1d6ca;
  }
a:hover {
  color: black;
}

.big-font{
  font-family: 'Montserrat', sans-serif;
}
  /*Newsletter*/
  .newsletter-section {
    padding: 30px 60px 45px 85px;
    /*padding: 30px 60px;*/
    background-color: gray;
    background-image: url('../../static/img/HP/newsletter.png');
  }
</style>
