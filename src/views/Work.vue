<template>
<div class="work">
  <section class="hero hero-image is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Work
          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
<section>
  <br>
  <h1 class="has-text-centered title brand-title-text">Brands We've Worked With</h1>
  <!--Grid of Clients-->

  <div style="padding: 0px 40px;" class="columns ">
    <div class="column">
      <router-link to="/Aris">
      <figure class="imghvr-zoom-in ih-delay-xs">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../../static/img/HP/IMG_6393.jpg" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
            </div>
          </div>
        </div>
        <figcaption>
          <img src="../../static/img/HP/arise-hero.jpg">
          This is some text
        </figcaption>
      </figure>
      </router-link>
    </div>

    <div class="column">
      <figure class="imghvr-zoom-in">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../static/img/HP/arise-hero.jpg" alt="Image">

          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
        <figcaption>
          <img src="../../static/img/HP/arise-hero.jpg">
          This is some text
        </figcaption>
      </figure>
    </div>
  </div>
  <div class="columns">
    <div class="column is-6 is-text-centered">
      <figure class="imghvr-zoom-in">
        <div class="card">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-text-centered">
              Hero title
            </h1>
            <h2 class="subtitle">
              Hero subtitle
            </h2>
          </div>
        </div>
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
        </div>
      </figure>

    </div>
    <div class="column is-text-centered">
      <div class="card">
      <figure class="imghvr-zoom-in">
        <div class="card">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Hero title
            </h1>
            <h2 class="subtitle">
              Hero subtitle
            </h2>
          </div>
        </div>

        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
        </div>
      </figure>
      </div>

    </div>
  </div>

  <div class="columns is-gapless">
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
  </div>

  <div class="columns is-gapless">
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
  </div>

  <div class="columns is-gapless">
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
    <div class="column is-text-centered">
      <figure class="imghvr-zoom-in">
        <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
        <figcaption>
          <img src="../../static/img/HP/GoLocalHonoredhere2017_graphic.jpg">
          This is some text
        </figcaption>
      </figure>

    </div>
  </div>
</section>
</div>
</template>
<script>
  export default {
    name: 'Work'
  }
</script>
<style lang="scss" scoped>
.hero-image {
  background: url("../../static/img/HP/Work_Hero-01.svg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
  .title {
    color: #fff;
  }
.brand-title-text {
 color: #000;
  padding-bottom: 20px;
}
</style>
