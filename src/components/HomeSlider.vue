<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero1.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Work"><img src="../../static/img/HP/hero2.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Tyler-J-McCall"><img src="../../static/img/HP/hero3.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Services"><img src="../../static/img/HP/hero4.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Shop"><img src="../../static/img/HP/Shop-05.png" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero6.svg" alt=""></router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'homeslider',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        preloadImages: false,
        lazyLoading: true,
        autoplay: 5000,
        setWrapperSize: true,
        autoHeight: true
      }
    }
  }
}
</script>

<style>

</style>
