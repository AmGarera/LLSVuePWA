<template>
  <div class="hello">
<section class="hero is-medium brand-story">
  <!-- Hero header: will stick at the top -->

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Tell Us Your Brand Story >
      </h1>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot white-text has-text-centered">
    <span>We empower our clients to help them find their brand identity and visually</span>
    <br>
    <span>communicate their brand stories in unique, compelling, and strategic ways.</span>
  </div>
</section>

    <section class="hero is-medium lls-intro">

      <div class="columns ">
        <div class="column">

        </div>

      </div>
      <div class="container is-fluid">
      <div class="columns is-gapless">
        <div class="column is-half">
          <p class="tile title flex has-text-centered">
            We are Long Live Simple, a creative and strategic graphic design studio.
          </p>
        </div>
        <div class="column is-half">
          <div class="tile is-parent">
            <article class="tile is-child">
              <!--<p class="title">Wide tile</p>-->
              <p class="flex">
                Here at Long Live Simple, we believe brands should tell stories.
                Whether your brand is an extension of what you do, a reflection of
                your personality or a platform to your ideal audience, we love
              creating unique, hand-drawn logos and custom work so our clients can have a symbol that represents who they are and what
              they do. We offer meaningful experiences for customer-driven
              and thoughtful brands.</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
    </section>
<section class="hero is-medium what-we-offer">
<h2 class="title what-we-offer-text">WHAT WE OFFER:</h2>
  <div class="columns">
<ul class="column">
</ul>

    <ul class="column">
      <li>Branding Packages</li>
      <li>Print Collateral Design</li>
      <li>Custom Illustration</li>
      <li>Custom Iconography</li>
    </ul>

    <hr class="divider-line">

    <ul class="column">
  <li>Branding Packages</li>
  <li>Print Collateral Design</li>
  <li>Custom Illustration</li>
  <li>Custom Iconography</li>
</ul>

  <ul class="column">
  </ul>
  </div>
  <p class="white-text listOfServices">See our full list of services ></p>
</section>
<section class="hero is-medium">
 <div class="columns is-gapless">
  <div class="column">
    Local Features
  </div>
  <div class="column">
  Sustainable Practices
  </div>
  <div class="column">
    Community Focused
  </div>
</div>
</section>

  </div>
<!--End of First Hero-->

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Section Title*/
h1 {
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
   color: #fff
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
}
  .listOfServices {
    border: 1px solid white;
    display: inline-block;
    padding: 20px;
  }
  .lls-intro {
    background-color: RGB(230,238,236);
  }

  hr.divider-line {
    width: 0px;
    height: 100%;
  }
</style>
