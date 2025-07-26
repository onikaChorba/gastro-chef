<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" :alt="slide.alt" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css';

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: true,
  breakpoints: {
    1200: {
      itemsToShow: 6,
    },
    992: {
      itemsToShow: 4,
    },
    768: {
      itemsToShow: 3,
    }
  }
}

defineProps({
  slides: Array
})
</script>

<style>
.carousel {
  --vc-nav-border-radius: 100%;
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
}

img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
}
</style>
