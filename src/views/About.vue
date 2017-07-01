<template>
  <div class="work">
    <section class="hero hero-image is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About
          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
    <section>
      <h3 class="title has-text-centered">The Long Live Simple Story:</h3>
      <div class="container is-fluid">
      <p class="has-text-centered mission">We are the full-service creative company that your small business has been looking for.
        Whether you're a recent startup, a well-established company,
        or an entrepreneurial organization or individual looking for a refresh,
        we offer strategy-based design services to fit your specific business needs.</p>
        <!--TODO Stamp Long Live simple Aligned right-->
      </div>
    </section>
    <br><!--TODO Replace this with padding-->
    <section class="container">
      <h3 class="title has-text-centered"> Our Mission</h3>
      <p class="has-text-centered mission">At Long Live Simple, we craft brands for entrepreneurs and
        businesses that are both relatable and intentional through custom typography and design services.
      Here are some of the things we love and the ways we aim to give back through what we do.</p>

      <!-- Main container -->
      <!--Media Object-->
      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96">
            <img src="../../static/img/Navigation Icons/icon2.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <br>
              <strong class="grey-text">Local Features -</strong> In this new series in the works,
              we’ll be focusing on local professional groups and incredible individuals who make a difference in the
              Asheville, North Carolina, area.</p>
          </div>
        </div>
      </article>
      <!--Sustainable Practices-->

      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96">
            <img src="../../static/img/Navigation Icons/icon2.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <br>
              <strong class="grey-text">Sustainable Practices -</strong> Although we do not require sustainable printing of our clients, we highly encourage those we work with to opt for sustainable printing methods,
              and we take pride in educating our clients on ways they can make a difference through printing methods and more.</p>
          </div>
        </div>
      </article>

      <!--Community Focused-->

      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96">
            <img src="../../static/img/Navigation Icons/icon2.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <br>
              <strong class="grey-text">Community Focused -</strong> Because we’re centered around our love for community,
              we showcase our client’s work, highlight our favorite quotes, and offer up ways to give back to others.</p>
          </div>
        </div>
      </article>
    </section>
    <br>
    <!--Meet The Team-->
    <section class="green-background">
      <br>
      <h3 class="title">Meet The Team:</h3>
      <!--Team Grid-->
      <div class="container">
      <div class="columns">
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-96x96">
                <img src="../../static/img/Navigation Icons/icon2.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <br>
                  <strong class="grey-text">Carley Lee | Creative Director</strong>
                  <br>
                  <strong class="grey-text">Long Live Simple</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-96x96">
                <img src="../../static/img/Navigation Icons/icon2.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <br>
                  <strong class="grey-text">Anthony Garera | Web Developer</strong>
                  <br>
                  <strong class="grey-text">DamGap Studios</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-96x96">
                <img src="../../static/img/Navigation Icons/icon2.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <br>
                  <strong class="grey-text">Collaborating with Taylor Heery Photography </strong>
                  <br>
                  <strong class="grey-text">for brand photos </strong>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-96x96">
                <img src="../../static/img/Navigation Icons/icon2.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <br>
                  <strong class="grey-text">Website editing by </strong>
                  <br>
                  <strong class="grey-text">Kelsey Mitchener Editing</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>
      <br>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>


<style scoped>
  .mission {
    padding: 0 10rem;
  }
  .grey-text {
    color: gray;
    font-size: large;
  }
  .media {
    border-top: none;
  }
  .green-background {
    background-color: rgb(226,241,234);
  }
</style>
