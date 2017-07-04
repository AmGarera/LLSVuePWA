<template>
  <div class="work">
  <section class="hero hero-image services-background is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">

          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
    <br>
    <section class="container is-fluid">
      <p>Long Live Simple believes in small-business success, building meaningful experiences for entrepreneurs and business owners. We believe in the power of simple, clean design and user experience, strong messaging, and a clearly defined voice. If you’re a passionate entrepreneur or business owner, you’re in the right place!

        Our services range from branding packages to custom illustrations to a variety of print and website solutions.</p>
      <br>
      <h3 class="title has-text-centered is-spaced"><b>OUR SERVICES</b></h3>
    </section>
    <br>
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
    <section class="container">
      <h3 class=" title has-text-left"> BRANDING PACKAGES</h3>
      <p class="has-text-left">Every branding package at Long Live Simple starts with a brand design. Whether a refresh or a start-to-finish design, this gets your project off to the right start.
        Choose from either our Simple Branding package or our Deluxe Branding package. From there you can choose to DIY or continue with one of the packages below that combines the brand design with collateral and/or a Squarespace site design.</p>
      <br>
      <h3 class="subtitle has-text-left"> <b>Simple Branding Package</b></h3>
      <p class="has-text-left">A three-week process equipping you with a custom logo, brand vision design, and marketing essentials. A basic package to get you started on your business plan and vision.
      </p>
      <br>
      <h4 class="subtitle is-5 has-text-left">What's included</h4>
      <ul class="has-text-left">
        <li>-Brand mood board</li>
        <li>-Custom logo</li>
        <li>-Secondary logo</li>
        <li>-Brand sub-mark</li>
        <li>-Color palette</li>
        <li>-Standard client icon set</li>
      </ul>

      <h4 class="subtitle is-5 has-text-left">Investment:</h4>
      <p class="has-text-left">Starting at $900</p>
      <p class="has-text-left">*Ask us about our local discounts.</p>
      <br>

      <h3 class="subtitle has-text-left"> <b>Deluxe Branding Package</b></h3>
      <p class="has-text-left">A 5- to 6-week partnership focusing on creating a completely cohesive and thoroughly thoughtful brand experience.
      </p>
      <br>
      <h4 class="subtitle is-5 has-text-left">What's included</h4>
      <ul class="has-text-left">
        <li>-Custom logo</li>
        <li>-Secondary logo</li>
        <li>-Brand sub-mark</li>
        <li>-Color palette</li>
        <li>-Custom client icon set</li>
        <li>-3 marketing materials/collateral of your choice</li>
      </ul>

      <h4 class="subtitle is-5 has-text-left">Investment:</h4>
      <p class="has-text-left">Starting at $1,500</p>
      <p class="has-text-left">*Ask us about our local discounts.</p>
      <br>
      <h3 class="subtitle has-text-left"> <b>Custom Illustration</b></h3>
      <p class="has-text-left">We create one-of-a-kind commissioned illustrations and digital vectors for any desired project. Please get in touch if you have a custom idea!
      </p>
      <br>
      <br>
      <h3 class="subtitle has-text-left"> <b>Brand Strategy / User Experience Strategy Sessions</b></h3>
      <p class="has-text-left">Help get clarity regarding your specific questions about starting your new business or refreshing your brand. Choose from in-person or by-phone sessions. Afterward you’ll receive a document outlining our suggested solutions.
      </p>
      <br>
    </section>
</div>
</template>
<script>
  export default {
    name: 'Services'
  }
</script>
<style scoped>
  .services-background {
   background: url("../../static/img/HP/SERVICES_hero.png") center;
    background-size: cover;
  }
  .white-box {
    color: white;
    border: 1px solid white;
    display: inline-block;
    padding: 17px;
  }
  .white-text {
    font-size: 20px;
    color: #fff;
    font-family: 'Karla', sans-serif;
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
  .divider-line {
    /*position:absolute;*/
    left:50%;
    top:10%;
    bottom:10%;
    border-left:1px solid white;
  }
</style>
