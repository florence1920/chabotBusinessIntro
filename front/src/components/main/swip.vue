<template>
  <swiper class="swiper" :options="swiperOption" data-delay="0" data-duration="0.8">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-default',
    title: 'Default',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 150,
        loop: true,
        // loopFillGroupWithBlank: true,
        // centeredSlides: true,
        autoplay:{
          delay:0
        },
        speed : 4000, // 슬라이드 속도 2초
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
  .swiper {
  height: 600px;
  width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      background: #000;
      color: #fff;
    }

  }

</style>