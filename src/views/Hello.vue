<template>
  <div class="hello">
    <section>
      <slick ref="slick" :options="slickOptions">
        <a href="https://unsplash.it/1920/1080"><img src="https://unsplash.it/1920/540" alt=""></a>
        <a href="https://unsplash.it/1920/1080"><img src="https://unsplash.it/1920/540" alt=""></a>
        <a href="https://unsplash.it/1920/1080"><img src="https://unsplash.it/1920/540" alt=""></a>
        <a href="https://unsplash.it/1920/1080"><img src="https://unsplash.it/1920/540" alt=""></a>
        <a href="https://unsplash.it/1920/1080"><img src="https://unsplash.it/1920/540" alt=""></a>
      </slick>
    </section>
<!--<section class="hero is-medium brand-story">-->
  <!--&lt;!&ndash; Hero header: will stick at the top &ndash;&gt;-->

  <!--&lt;!&ndash; Hero content: will be in the middle &ndash;&gt;-->
  <!--<div class="hero-body">-->
    <!--<div class="container has-text-centered">-->
      <!--<h1 class="title white-box">-->
        <!--Tell Us Your Brand Story >-->
      <!--</h1>-->
    <!--</div>-->
  <!--</div>-->

  <!--&lt;!&ndash; Hero footer: will stick at the bottom &ndash;&gt;-->
  <!--<div class="hero-foot white-text has-text-centered">-->
    <!--<span>We empower our clients to help them find their brand identity and visually</span>-->
    <!--<br>-->
    <!--<span>communicate their brand stories in unique, compelling, and strategic ways.</span>-->
  <!--</div>-->
<!--</section>-->

    <section class="hero is-medium lls-intro">

      <div class="columns ">
        <div class="column">

        </div>

      </div>
      <div class="container is-fluid">
      <div class="columns is-gapless">
        <div class="column is-half">
          <img src="../../static/img/HP/WeareLongLiveSimple_content.png" alt="">
          <!--<p class="tile title flex has-text-centered">-->
            <!--We are Long Live Simple, a creative and strategic graphic design studio.-->
          <!--</p>-->
        </div>
        <div class="column is-half">
          <div class="tile is-parent">
            <article class="tile is-child">
              <!--<p class="title">Wide tile</p>-->

              <div class="content">
                <p style="padding-top: 20px; font-size: large" class="has-text-left">
                  Here at Long Live Simple, we believe brands should tell stories.
                  Whether your brand is an extension of what you do, a reflection of
                  your personality or a platform to your ideal audience, we love
                  creating unique, hand-drawn logos and custom work so our clients can have a symbol that represents who they are and what
                  they do. We offer meaningful experiences for customer-driven
                  and thoughtful brands.</p>
                <a href="/About"><b><p class="more-about-us has-text-right">More About Us ></p></b></a>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
    </section>
<section style="padding-bottom: 40px; padding-top: 40px" class="hero is-medium what-we-offer">
  <br>
<h2 class="title what-we-offer-text">WHAT WE OFFER:</h2>
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
  <p class="white-text white-box listOfServices"><strong class="white-text">See our full list of services ></strong></p>
  </div>
</section>
<section class="hero is-medium">
 <div class="columns is-gapless">
  <div style="background: #E2F2EA;" class="column">
    <img src="../../static/img/HP/LocalFeatures.png" alt="Local Features">
  </div>
  <div style="background-color: #4CBFA0" class="column">
    <img src="../../static/img/HP/SustainablePractices.png" alt="Sustainable Practices">
  </div>
  <div style="background: #A1D7CA;" class="column">
    <img src="../../static/img/HP/CommunityFocused.png" alt="Community Focused">

  </div>
</div>
</section>
    <section class="newsletter-section">
      <div class="columns container white-text">
        <div class="column">
          <p style="flex-wrap: wrap"><b>Sign up for our newsletter to receive branding insights. freebies, and happenings.</b></p>
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
      <div class="columns container">
      <div class="column">
        <p class="has-text-centered white-text"><i>We aren't the Spamming Type</i></p>
      </div>

        <div class=" column">
          <div class="has-text-centered">
            <!-- Left empty for spacing -->
            <a class="button is-primary is-inverted is-outlined is-medium"><strong>Get Notified</strong></a>
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
  import Slick from 'vue-slick'

export default {
    name: 'hello',
    components: { Slick },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          autoplay: true,
          arrows: false,
          adaptiveHeight: true,
          prevArrow: false,
          nextArrow: false,
          variableWidth: true,
          centerMode: true
        // Any other options that can be got from plugin documentation
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
  padding: 20px;
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
  color: #42b983;
}
.brand-story {
  background-image: url('https://unsplash.it/1920/1080');
}
.what-we-offer {
  background-image: url('https://unsplash.it/1920/1080');
}
.what-we-offer-text {
  color: #fff;
  padding-bottom: 30px;
}
  .listOfServices {

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
  }
[class^='imghvr-'],
[class*=' imghvr-'] {
  background-color: #D14233;
}

  /*Newsletter*/
  .newsletter-section {
    padding-top: 20px;
    background-color: gray;
  }
</style>
