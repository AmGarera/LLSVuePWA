<template>
  <div class="hello">
<section class="hero is-medium">
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
  <div class="hero-foot white-text">
    <span>We empower our clients to help them find their brand identity and visually</span>
    <br>
    <span>communicate their brand stories in unique, compelling, and strategic ways.</span>
  </div>
</section>
  </div>
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
section {
  background-image: url('https://unsplash.it/1920/1080');
}
</style>
